import React, {useState} from 'react';
import { MdFastfood } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { GiCardboardBoxClosed } from "react-icons/gi";

const categoriesData = () => {
  
   const [categories, setCategories] = useState([
          {
              id: 1,
              Icon: MdFastfood,
              category: 'Food',
              select: false
          },
          {
              id: 2,
              Icon: FaCarSide,
              category: 'Transport',
              select: false
          },
          {
              id: 3,
              Icon: BiSolidMoviePlay,
              category: 'Entertainment',
              select: false
          },
          {
              id: 4,
              Icon: FaRegMoneyBillAlt,
              category: 'Bill',
              select: false
          },
          {
              id: 5,
              Icon: HiShoppingBag ,
              category: 'Shopping',
              select: false
          },
          {
              id: 6,
              Icon: GiCardboardBoxClosed,
              category: 'Others',
              select: false
          },
  
      ])  

      return {
        categories,
        setCategories
      };

}

export default categoriesData;
