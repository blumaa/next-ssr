import Link from 'next/link'
import Image from '../components/image'
const About = () => {
    return (
        <div style={{fontSize: '20px', color: 'blue'}}>
            <h1>About</h1>
            <Image />
            <Link href='/'>
                <button>
                    Back
                </button>
            </Link>
            This is the about page
        </div>
    )
}

export default About