import Link from "next/link";

export default function NotFound() {
     return (
          <div className="not-found section container reveal">
               <h1>404</h1>
               <h2>Page Not Found</h2>
               <p>The enterprise solution or resource you are looking for has been moved or does not exist.</p>
               <Link href="/" className="btn btn-primary">
                    Return to Homepage
               </Link>

               
          </div>
     );
}
