import Link from "next/link";

const DemoPage = () => {
    return (
    <div className='font-extrabold m-5'>
            <p className='text-7xl p-5'>Thank you for viewing my Demo Portfolio Website.</p>
            <p className='text-3xl p-5'>Please Note: Not all links are valid pages and will lead to this page.</p>
            <p className='text-3xl p-5'>To return to the home page click <Link href='/' className='hover:underline'>HERE</Link></p>
    </div>
    )
};

export default DemoPage;