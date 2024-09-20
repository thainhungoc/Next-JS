import { Table,
         TableHeader,
         TableCaption,
         TableRow,
         TableHead,
         TableBody,
         TableCell, } from '@/components/ui/table'
import React from 'react'

interface Product{
    id:number,
    name:string,
    price:number,
    image:string,
    quantity:number
}
export default function page() {
    const productList :Product[] = [
        {
            id: 1,
            name: "Cam",
            image: "path/to/image1.jpg",
            price: 12000,
            quantity: 12
        },
        
    ]
  return (
    <div>
        <h1>Quan ly san pham</h1>
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">STT</TableHead>
      <TableHead>Tên sản phẩm</TableHead>
      <TableHead>Hình ảnh</TableHead>
      <TableHead className="text-right">Giá</TableHead>
      <TableHead>Số lượng</TableHead>
      <TableHead>Chức năng</TableHead>
    </TableRow>
  </TableHeader>
  {/* <TableBody>
    <TableRow>
        {list.map((list)=>())}
      <TableCell className="font-medium">1</TableCell>
      <TableCell>Cam</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">12.000 VND</TableCell>
      <TableCell className="font-medium">12</TableCell>
    </TableRow>
  </TableBody> */}
  <TableBody>
    {list.map((item, index) => (
        <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.paymentMethod}</TableCell>
            <TableCell className="text-right">{item.price} VND</TableCell>
            <TableCell className="font-medium">{item.quantity}</TableCell>
        </TableRow>
    ))}
</TableBody>

</Table>

    </div>
  )
}
