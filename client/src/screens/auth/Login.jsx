import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

export const Login = () => {
  const navigate = useNavigate()
  const ValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter password"),
    agree: yup
      .boolean()
      .oneOf([true], "Please accept the terms and conditions")
      .required("Please accept the terms and conditions")  
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
  } = useForm({
    resolver: yupResolver(ValidationSchema),
    mode: "all",
  });

  const handleLogin = async(data) => {
    const payload = {
      email: data.email, password: data.password, role: 'buyer'
    }
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', payload)
      console.log(response, 'response')
      if(response?.data?.token){
        localStorage.setItem('access_token', response.data.token)
        navigate('/dashboard')
      }
    } catch(error) {
      console.log('errors', error)
      toast(error?.response?.data?.message, {
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
      <section className="regsiter pt-16 relative">
        <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
        <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
          <Container>
            <div>
              <Title level={3} className="text-white">
                Log In
              </Title>
              <div className="flex items-center gap-3">
                <Title level={5} className="text-green font-normal text-xl">
                  Home
                </Title>
                <Title level={5} className="text-white font-normal text-xl">
                  /
                </Title>
                <Title level={5} className="text-white font-normal text-xl">
                  Log In
                </Title>
              </div>
            </div>
          </Container>
        </div>
        <form onSubmit={handleSubmit(handleLogin)} className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl">
          <div className="text-center">
            <Title level={5}>New Member</Title>
            <p className="mt-2 text-lg">
              Do you already have an account? <CustomNavLink href="/register">Signup Here</CustomNavLink>
            </p>
          </div>

          <div className="py-5 mt-8">
            <Caption className="mb-2">Enter Your Email *</Caption>
            <input type="email" {...register("email")} className={commonClassNameOfInput} placeholder="Enter Your Email" required />
            {errors?.email && <span>{errors?.email?.message}</span>}
          </div>
          <div>
            <Caption className="mb-2">Password *</Caption>
            <input type="password" {...register("password")} className={commonClassNameOfInput} placeholder="Enter Your Password" required />
            {errors?.password && <span>{errors?.password?.message}</span>}
          </div>
          <div className="flex items-center gap-2 py-4">
            <input type="checkbox" {...register('agree')}/>
            {errors?.agree && <span>{errors?.agree?.message}</span>}
            <Caption>I agree to the Terms & Conditions</Caption>
          </div>
          <PrimaryButton type='submit' className="w-full rounded-none my-5">Login</PrimaryButton>
          <div className="text-center border py-4 rounded-lg mt-4">
            <Title>Or Sign in with</Title>
            <div className="flex items-center justify-center gap-5 mt-5">
              <button className="flex items-center gap-2 bg-red-500 text-white p-3 px-5 rounded-sm">
                <FaGoogle />
                <p className="text-sm">Sign in with Google</p>
              </button>
              <button className="flex items-center gap-2 bg-indigo-500 text-white p-3 px-5 rounded-sm">
                <FaFacebook />
                <p className="text-sm">Sign in with Facebook</p>
              </button>
            </div>
          </div>
          <p className="text-center mt-5">
          By signing up, you create a SkyBid account and agree to SkyBid's terms and conditions. <span className="text-green underline">Terms & Conditions</span> &
            <span className="text-green underline"> Privacy Policy </span> .
          </p>
        </form>
        <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
      </section>
    </>
  );
};
