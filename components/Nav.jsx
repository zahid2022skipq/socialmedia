"use client"

import Link from "next/link";
import Image from "next/image"
import { useState, useEffect } from "react";
import {signIn, signOut, useSessions, getProviders} from "next-auth/react"

const Nav = () => {
  const isUserLoggedIn = true;
  // const [providers, setProviders] = useState(null);


  // useEffect(() => {
  //   const setProviders = async () => {
  //     const response = await getProviders();
  //     setProviders(response);
  //   };

  //   setProviders();
  // }, [])
  return (
    <nav className="flex-between pt-3 mb-16 w-full">
      <Link href="/" className="flex gap-2 flex=center">
        <Image src="/assets/images/logo.svg" alt="logo" width={30} height={30} className="object-contain"/>
        <p className="logo_text">PromptsForYou</p>
      </Link>

      {/* Desktop navigation */}
      
        <div className="sm:flex hidden">
      {
        isUserLoggedIn ?
      ( 
        <div className="flex gap-3 md:gap-5">
        <Link href="/create-post" className="black_btn">
          Create Post
        </Link>
        <buiton className="outline_btn" type="button" onClick={signOut}>Sign out</buiton>
        <Link href={"/profile"}>
          <Image src="/assets/images/logo.svg" 
            alt="profile"
            height={37}
            width={37}
            className="rounded-full"
          />
        </Link>
      </div>) : (
        
        <>
          {providers && Object.values(providers).map((provider) => 
          
          <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black-btn">Sign In</button>
          )
          }
        </>
        
        )
      }
      </div>

      
      {/* Mobile navigation */}

      <div className="sm:hidden flex" >
          {isUserLoggedIn ? <div className="flex">
            <Image src="/assets/images/logo.svg" height={37} width={37} alt="profile" />
          </div>
          :
          (  <>
          {providers && Object.values(providers).map((provider) => 
          
          <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black-btn">Sign In</button>
          )
          }
        </>
          )
          }
      </div>
      
    </nav>
  )
}

export default Nav