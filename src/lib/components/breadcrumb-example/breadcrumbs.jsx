import React from 'react'
import BreadcrumbsItem from './breadcrumbs-Item';
import "../../assets/styles/css/tailwind.css"
import "../../assets/styles/css/Home.module.css"

const Breadcrumbs=( {children})=> {
    return (
        <div className="flex items-start gap-2">
           {children}
        </div>
    )
}
export default Breadcrumbs;
