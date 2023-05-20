
import { useParams } from "react-router-dom"
import CategoryTitle from "../../components/CategoryTitle";
import CategoryBooks from "../../components/CategoryBooks";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import { getCategoryBySlud } from "../../http";
import GridError from "../../components/GridError";

const Categories = () => {

    /* Changed to UseQuery  
    useEffect(() => {
        http.get<ICategory>("public/categories", {
            params: {
                slug: params.slug
            }
        }).then(response => {
            setCategory(response.data)
        })
    }, [params.slug])*/

    const params = useParams()
    const { data: category, isLoading, error } = useQuery(["categoryBySlug", params.slug], () => getCategoryBySlud(params.slug || ""))

    if (isLoading) {
        return (<>
            <Loader />
        </>)
    }

    if (error) {
        return <GridError message="Error" subMessage="Maintenance application. Try again later" />
    }

    return (<section>

        <CategoryTitle title={category?.name ?? ''} />
        <CategoryBooks category={category!} />
    </section>)
}

export default Categories