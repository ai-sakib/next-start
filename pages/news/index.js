import Link from 'next/link'

const News = () => {
    return (
        <div>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href='/news/nextjs-is-a-great-framework'>
                        NextJS is a great framework
                    </Link>
                </li>
                <li>
                    <Link href='/news/something-else'>Something else</Link>
                </li>
            </ul>
        </div>
    )
}
export default News
