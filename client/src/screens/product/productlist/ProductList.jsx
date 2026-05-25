import React, { useEffect } from "react";
import { PrimaryButton, Title } from "../../../router";
import { NavLink } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('access_token')}`, // Replace with your actual token
  CustomHeader: 'custom_value', // Example of a custom header
};

export const ProductList = () => {
  useEffect(() => {
    const response = axios.get('http://localhost:5000/api/product/user', {headers});
    console.log('responseee', response)
  })
  return (
    <>
      <section className="shadow-s1 p-8 rounded-lg">
        <div className="flex justify-between">
          <Title level={5} className=" font-normal">
            Product Lists
          </Title>
          <NavLink to="/create-product">
            <PrimaryButton className="flex items-center gap-3 px-5 py-2 text-sm rounded-md transition-transform hover:scale-105">
              <AiOutlinePlus size={20} />
              <span>Create Product</span>
            </PrimaryButton>
          </NavLink>
        </div>
        <hr className="my-5" />
      </section>
    </>
  );
};
