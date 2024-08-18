
import { Router } from "next/router";
import Texteditor from "./components/Texteditor";
import Link from "next/link";
import LoginPage from "./login/page";

// or less ideally

export default function Home() {
  return (
    <>
    
    <div className="container mb-1">
     
    <Texteditor></Texteditor>
    </div>
    </>
  );
}
