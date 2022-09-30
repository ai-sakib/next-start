import { useRouter } from 'next/router'

const Detail = () => {
    const router = useRouter()
    const { newsId } = router.query
    return (
        <div>
            <h1>{newsId} Page</h1>
        </div>
    )
}
export default Detail
