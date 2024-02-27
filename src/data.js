

import speaker6 from "../src/img/6.jpg"
import speaker7 from "../src/img/7.jpg"
import speaker8 from "../src/img/8.jpg"
import speaker9 from "../src/img/9.jpg"


import speaker10 from "../src/img/10.jpg"
import speaker11 from "../src/img/11.jpg"
import speaker12 from "../src/img/12.jpg"
import speaker13 from "../src/img/13.jpg"

import speaker23 from "../src/img/23.jpg"
import speaker24 from "../src/img/24.jpg"
import speaker25 from "../src/img/25.jpg"
import speaker26 from "../src/img/26.jpg"

import speaker27 from "../src/img/27.jpg"
import speaker28 from "../src/img/28.jpg"
import speaker29 from "../src/img/29.jpg"
import speaker30 from "../src/img/30.jpg"


export const sanityData = [
    {
        result: [
            {
                _type: "product",
                name: "Speaker",
                _updatedAt: "2024-02-24T10:28:08Z",
                slug: {
                    current: "speaker",
                    _type: "slug"
                },
                image: [
					speaker27,
					speaker28,
					speaker29,
					speaker30,
				],
                _rev: "aFg4DQ8VnKtfWX3L7qmERR",
                details: "Immerse in the making sound",
                _id: "00138319-591a-4943-acbc-fe6e46786609",
                price: 55,
                _createdAt: "2024-02-08T16:12:20Z"
            },
            {
                name: "Headphones",
                slug: {
                    current: "headphones_new",
                    _type: "slug"
                },
                image: [
					speaker23,
					speaker24,
					speaker25,
					speaker26,
				],
                _createdAt: "2024-02-08T16:37:32Z",
                _type: "product",
                _id: "08a85d20-399f-4a84-aba7-4fe312d963b3",
                _updatedAt: "2024-02-24T10:32:54Z",
                price: 55,
                _rev: "UTNNzvANEIshqW3hB65Xw3",
                details: "A second pair of headphones"
            },
            {
                _updatedAt: "2024-02-08T16:46:29Z",
                slug: {
                    current: "cool-in-ear-headphones",
                    _type: "slug"
                },
                price: 39,
                _createdAt: "2024-02-08T16:46:29Z",
                _rev: "Ow86GWJjmhBHWYHYobpf2U",
                name: "Cool in-ear headphones",
                _id: "4792c85a-dfc2-4095-993b-94f00becf436",
                image: [
  
                ],
                _type: "product",
                details: "Use this while working out"
            },
            {
                _createdAt: "2024-02-24T10:35:22Z",
                _type: "product",
                _id: "4d549ffe-ae7c-4598-bacf-7212953b365d",
                slug: {
                    current: "smart-watch",
                    _type: "slug"
                },
                _updatedAt: "2024-02-24T10:35:22Z",
                image: [
					speaker10,
					speaker11,
					speaker12,
					speaker13,
                ],
                price: 19,
                _rev: "APzEByrkj64l8cuDH1hQHr",
                name: "Smart Watch",
                details:" A wearable computing device that closely resembles a wristwatch or other time-keeping device"
            },
            {
                price: 98,
                _createdAt: "2024-02-06T12:06:55Z",
                _type: "product",
                _id: "cd2046ed-e5f2-4b0d-bee5-8d6e899b76de",
                _updatedAt: "2024-02-09T14:26:28Z",
                image: [
					speaker6,
					speaker7,
					speaker8,
					speaker9,
                ],
                _rev: "vJ3amczZGZtXfNQ58ud3W8",
                name: "Headphones",
                details: "A headphone spitting out quality sound .",
                slug: {
                    current: "headphones",
                    _type: "slug"
                }
            }
        ],
    },
    {
        result: [
            {
                largeText1: "FINE",
                desc: "Best headphones on the market",
                image: speaker23,
                discount: "20% OFF",
                smallText: "Best Solo Air",
                largeText2: "SMILE",
                buttonText: "Shop Now",
                midText: "Summer Sale",
                saleTime: "15 Nov to 7 Dec",
                _createdAt: "2024-02-08T09:53:00Z",
                _id: "66059764-8857-4d1a-a37a-06cf8d8fa90e",
                _updatedAt: "2024-02-08T09:53:00Z",
                product: "headphones",
                _type: "banner",
                _rev: "25hsVFpliKRAANosuNt03o"
            }
        ],
        
    }
]





// Remove empty string keys from each object
// export const newArray = sanityData.map(obj =>
//     Object.keys(obj).filter(key => key !== ).reduce((acc, key) => {
//         acc[key] = obj[key];
//         return acc;
//     }, {})
// );

// console.log(newArray);
