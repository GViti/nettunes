'use client';

// import Image from "next/image";
import CardList from "../components/organisms/cardList/CardList";


export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <CardList/>
    </div>
  );
}
