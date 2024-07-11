"use client";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "./page.module.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import Table from "@/components/table";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row stats my-0">
        <div className=" ms-2">
          <Link href="/CreateQA" passHref={true}>
            <button className="btn btn-light btn-lg float-end m-4 me-5 px-5 bg-#6d7fcc" style={{backgroundColor:'#263c9c',color:'white'}}>Create QA</button>
          </Link>
          <h2 className="m-4 text-[2rem]">Project Details</h2>
          {/* <div className="card">
            <div className="card-body text-center text-success">
              <Link href="/CreateQA" passHref={true}>
                <div className="card-title">
                  <h4 className="text-dark">CreateQA</h4>
                </div>
                <button className="btn">CreateQA</button>
              </Link>
            </div>
          </div> */}
        </div>
        <div className="" style={{borderRadius: "2%", 
          backgroundColor:"white",width:"92%", marginLeft:"35px", marginRight:"9"
          }}>
        <Table />
        </div>
      </div>
    </>
  );
}
