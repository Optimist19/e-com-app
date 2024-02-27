import speaker1 from "./img/1.jpg"

import speaker6 from "./img/6.jpg"
import speaker7 from "./img/7.jpg"
import speaker8 from "./img/8.jpg"
import speaker9 from "./img/9.jpg"



import speaker10 from "./img/10.jpg"
import speaker11 from "./img/11.jpg"
import speaker12 from "./img/12.jpg"
import speaker13 from "./img/13.jpg"

import speaker23 from "./img/23.jpg"
import speaker24 from "./img/24.jpg"
import speaker25 from "./img/25.jpg"
import speaker26 from "./img/26.jpg"

import speaker27 from "./img/27.jpg"
import speaker28 from "./img/28.jpg"
import speaker29 from "./img/29.jpg"
import speaker30 from "./img/30.jpg"

import speaker31 from "./img/31.jpg"
import speaker32 from "./img/32.jpg"
import speaker33 from "./img/33.jpg"
import speaker34 from "./img/34.jpg"


export const sanityData = [
	
		{
			result: [
				{
					_rev: "aFg4DQ8VnKtfWX3L7qmERR",
					_type: "product",
					name: "Speaker",
					_updatedAt: "2024-02-24T10:28:08Z",
					slug: {
						current: "speaker",
						_type: "slug"
					},
					_createdAt: "2024-02-08T16:12:20Z",
					price: 55,
					details: "Immerse in the making sound",
					_id: "00138319-591a-4943-acbc-fe6e46786609",
					image: [
						speaker27,
						speaker28,
						speaker29,
						speaker30,
					]
				},
				{
					_id: "08a85d20-399f-4a84-aba7-4fe312d963b3",
					_updatedAt: "2024-02-24T10:32:54Z",
					slug: {
						current: "headphones_new",
						_type: "slug"
					},
					image: [
						speaker23,
						speaker24,
						speaker25,
						speaker26
					],
					_type: "product",
					name: "Headphones",
					details: "A second pair of headphones",
					price: 55,
					_createdAt: "2024-02-08T16:37:32Z",
					_rev: "UTNNzvANEIshqW3hB65Xw3"
				},
				{
					price: 39,
					_rev: "Ow86GWJjmhBHWYHYobpf2U",
					_type: "product",
					name: "Cool in-ear headphones",
					_updatedAt: "2024-02-08T16:46:29Z",
					slug: {
						current: "cool-in-ear-headphones",
						_type: "slug"
					},
					image: [
						speaker10,
						speaker11,
						speaker12,
						speaker13,
					],
					_createdAt: "2024-02-08T16:46:29Z",
					details: "Use this while working out",
					_id: "4792c85a-dfc2-4095-993b-94f00becf436"
				},
				{
					_rev: "APzEByrkj64l8cuDH1hQHr",
					_updatedAt: "2024-02-24T10:35:22Z",
					image: [
						speaker31,
						speaker32,
						speaker33,
						speaker34
					],
					price: 19,
					_createdAt: "2024-02-24T10:35:22Z",
					_id: "4d549ffe-ae7c-4598-bacf-7212953b365d",
					slug: {
						current: "smart-watch",
						_type: "slug"
					},
					_type: "product",
					name: "Smart Watch",
					details: "A wearable computing device that closely resembles a wristwatch or other time-keeping device"
				},
				{
					slug: {
						current: "headphones",
						_type: "slug"
					},
					image: [
						speaker6,
						speaker7,
						speaker8,
						speaker9,
					],
					price: 98,
					_createdAt: "2024-02-06T12:06:55Z",
					name: "Headphones",
					_id: "cd2046ed-e5f2-4b0d-bee5-8d6e899b76de",
					_updatedAt: "2024-02-09T14:26:28Z",
					_rev: "vJ3amczZGZtXfNQ58ud3W8",
					_type: "product",
					details: "A headphone spitting out quality sound ."
				}
			],
			ms: 4
		},
		{
			result: [
				{
					smallText: "Best Solo Air",
					saleTime: "15 Nov to 7 Dec",
					_createdAt: "2024-02-08T09:53:00Z",
					image: speaker1,
					_rev: "25hsVFpliKRAANosuNt03o",
					_type: "banner",
					product: "headphones",
					largeText2: "SMILE",
					largeText1: "FINE",
					_id: "66059764-8857-4d1a-a37a-06cf8d8fa90e",
					_updatedAt: "2024-02-08T09:53:00Z",
					discount: "20% OFF",
					midText: "Summer Sale",
					desc: "Best headphones on the market",
					buttonText: "Shop Now"
				}
			],
			ms: 4
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
