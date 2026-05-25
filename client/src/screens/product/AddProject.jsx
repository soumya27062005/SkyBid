import { CategoryDropDown, Caption, PrimaryButton, Title } from "../../router";
import * as yup from 'yup';
import { commonClassNameOfInput } from "../../components/common/Design";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const navigate = useNavigate()

  const ValidationSchema = yup.object({
    title: yup.string().required("Please enter the title"),
    description: yup.string().required("Please enter description"),
    height: yup.number().required("Please enter height"),
    weight: yup.number().required("Please enter weight"),
    price: yup.number().required("Please enter price"),
    length: yup.number().required("Please enter length"),
    width: yup.string().required("Please enter width"),
    mediumused: yup.string().required("Please enter medium"),
  }).required();
    const {
      register,
      handleSubmit,
      formState: { errors },
      // setValue,
    } = useForm({
      resolver: yupResolver(ValidationSchema),
      mode: "all",
    });

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`, // Replace with your actual token
      CustomHeader: 'custom_value', // Example of a custom header
    };
    console.log('errors', errors)
  

  const handleProductAdd = async(data) => {
    const payload = {...data}
    try {
      const response = await axios.post('http://localhost:5000/api/product', payload, {headers})
      console.log(response, 'response')
      if(response){
        console.log('jello', response)
        if(response?.data?.meta?.status) {
          navigate('/create-product')
        }
        // localStorage.setItem('access_token', response.token)
        // navigate(data.role.value === 'seller' ? '/seller/login' : '/login')
      }
    } catch(error) {
      console.log('errors', error)
      toast(error?.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className=" font-normal mb-5">
          Create Product
        </Title>
        <hr className="my-5" />
        <form onSubmit={handleSubmit(handleProductAdd)}>
          <div className="w-full">
            <Caption className="mb-2">Title *</Caption>
            <input type="text" {...register("title")} className={`${commonClassNameOfInput}`} placeholder="Title" />
            {errors?.title && <span>{errors?.title?.message}</span>}
          </div>
          <div className="py-5">
            <Caption className="mb-2">Category *</Caption>
            <CategoryDropDown className={`${commonClassNameOfInput}`} />
            {/* {errors?.category && <span>{errors?.category?.message}</span>} */}
          </div>
          <div className="flex items-center gap-5 my-4">
            <div className="w-1/2">
              <Caption className="mb-2">Height (cm) </Caption>
              <input type="number" {...register("height")} placeholder="height" className={`${commonClassNameOfInput}`} />
              {errors?.height && <span>{errors?.height?.message}</span>}
            </div>
            <div className="w-1/2">
              <Caption className="mb-2">Length (cm) </Caption>
              <input type="number" {...register("length")} placeholder="Length" className={`${commonClassNameOfInput}`} />
              {errors?.length && <span>{errors?.length?.message}</span>}
            </div>
          </div>
          <div className="flex items-center gap-5 my-4">
            <div className="w-1/2">
              <Caption className="mb-2">Width (cm) </Caption>
              <input type="number" {...register("width")} placeholder="width" className={`${commonClassNameOfInput}`} />
              {errors?.width && <span>{errors?.width?.message}</span>}
            </div>
            <div className="w-1/2">
              <Caption className="mb-2">
                Medium used <span className=" text-purple-400 italic">(Typically, pencil, ink, charcoal or other)</span>
              </Caption>
              <input type="text" {...register("mediumused")} placeholder="Medium used" className={commonClassNameOfInput} />
              {errors?.mediumused && <span>{errors?.mediumused?.message}</span>}
            </div>
          </div>
          <div className="flex items-center gap-5 mt-4">
            <div className="w-1/2">
              <Caption className="mb-2">
                Weight of piece <span className=" text-purple-400 italic">(kg)</span>
              </Caption>
              <input type="number" {...register("weight")} placeholder="weigth" className={`${commonClassNameOfInput}`} />
              {errors?.weight && <span>{errors?.weight?.message}</span>}
            </div>
            <div className="w-1/2">
              <Caption className="mb-2">Price Range*</Caption>
              <input type="number" {...register("price")} className={`${commonClassNameOfInput}`} placeholder="Price" />
              {errors?.price && <span>{errors?.price?.message}</span>}
            </div>
          </div>
          <div>
            <Caption className="mb-2">Description *</Caption>
            <textarea {...register("description")} className={`${commonClassNameOfInput}`} cols="30" rows="5"></textarea>
            {errors?.description && <span>{errors?.description?.message}</span>}
          </div>
          <div>
            <Caption className="mb-2">Image </Caption>
            <input type="file" className={`${commonClassNameOfInput}`} {...register("image")} />
          </div>
          <PrimaryButton type="submit" className="rounded-none my-5">
            CREATE
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};
