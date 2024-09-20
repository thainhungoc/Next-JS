'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

export default function page() {
    const productList = [
        {
            id: 1,
            name: "san pham 1",
            des: "asdsadsa"
        },
        {
            id: 2,
            name: "san pham 2",
            des: "asdsadsa"
        },
        {
            id: 3,
            name: "san pham 3",
            des: "asdsadsa"
        },
        {
            id: 4,
            name: "san pham 4",
            des: "asdsadsa"
        }
    ]
    const requestParam = useSearchParams();
    const [searchInput, setSearchInput] = useState<string>(String(requestParam.get("name")));
    const inputRef = useRef<any>();
    const router = useRouter();
    console.log("gia tri query ", String(requestParam.get("name")))
    console.log("component da render gia tri searchinput hien tai la ", searchInput)

    useEffect(() => {
        setSearchInput(String(requestParam.get("name")))
    }, [requestParam.get("name")])
  return (
    <div>
      Product Page
      <input ref={inputRef} type="text"  placeholder='ten hoac mo ta'/>
      <button onClick={() => {
        router.push("/product/search?name=" + inputRef.current.value)
      }}>search</button>
      <ul>
        {
            productList.filter(item => item.name.includes(searchInput)).map((product, index) => {
                return (
                    <li key={index}>
                        STT: {index + 1}
                        Name: {product.name}
                        Des: {product.des}
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}
