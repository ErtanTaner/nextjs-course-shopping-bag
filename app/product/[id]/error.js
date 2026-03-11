"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ErrorPage({ error, reset }) {
    const router = useRouter();
    return (
        <div className="container error-page">
           <Image
             src="/error.png"
             alt="Error image"
             width={400}
             height={150}
           />
           <h2>
            Something is wrong
           </h2>
           <p>{error.message}</p>
           <div className="actions">
            <button onClick={() => router.back()} className="outline">
             Go back
            </button>
            <button onClick={() => reset()}>
             Try again
            </button>
           </div>
        </div>
    );
}
