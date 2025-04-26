import Link from "next/link";
import ErrorNavbar from "../error/component/shared/ErrorNavbar";

export default function Sendingcode(){
    return(
        <div>
            <ErrorNavbar/>
            <div>
                <h1>Your link is being sent.Hang tight!</h1>
                <p>we've sent the link to mahdi.amini8894@ gmail.com</p>
                
                <Link href='https://mail.google.com/mail'>Go to your email</Link>
                <p>You will be redirected from the link in the email, you can safetly close the tab</p>
                

            </div>
        </div>
    )
}