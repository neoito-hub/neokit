import React from "react";
import Link from "next/link";
import "../../assets/styles/css/tailwind.css"

import "../../assets/styles/css/Home.module.css"

const BreadcrumbsItem=(props)=> {
  return (
    <div className='flex'>
      <span className="pr-2">/</span>
      <span><Link href={props.href}>{props.text}</Link></span>
    </div>
  );
}

export default BreadcrumbsItem;
