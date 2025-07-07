import Link from "next/link"

const Footer = () => {
  return (
    <footer id="footer" className="clr_bg_secondary clr_border flex justify-between border mx-[9.5rem] gap-2 px-28 text-sm pt-14 pb-20 flex-wrap">
        <div className="flex gap-4 font-medium">
            <Link href='/about' className="hover:text-teal-500 transition ease-out">About</Link>
            <Link href='/speaking' className="hover:text-teal-500 transition ease-out">Speaking</Link>
            <Link href='/projects' className="hover:text-teal-500 transition ease-out">Projects</Link>
            <Link href='/uses' className="hover:text-teal-500 transition ease-out">Uses</Link>
        </div>
        <p className="clr_light">© 2025 Harvey Bennet. All rights reserved.</p>
    </footer>
  )
}

export default Footer