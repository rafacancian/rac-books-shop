
import { useParams } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CategoryTitle from "../../components/CategoryTitle";
import CategoryBooks from "../../components/CategoryBooks";
import axios from "axios";
import { ICategory } from "../../interfaces/ICategory";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Categories = () => {

    const [category, setCategory] = useState<ICategory>();

    /*const getCategoryBySlug = async (slug: string) => {
        console.log("outro getCategoryBySlug")
        let response = await axios.get<ICategory>('http://localhost:8000/public/categories', {
          params: {
            slug
          }
        })
        debugger
        console.log("outro getCategoryBySlug result: " +response.data)

        const myObject: ICategory = response.data as ICategory;
        return myObject;
    }

    const params = useParams()
    const { data: category, isLoading } = useQuery(['getCategoryBySlug', params.slug], () => getCategoryBySlug(params.slug || ''))

    if (isLoading) {
        return (<>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </>)
    }*/

    return (<section>
        <CategoryTitle text={category?.name ?? ''} />
        <CategoryBooks category={category!} />
    </section>)
}

export default Categories