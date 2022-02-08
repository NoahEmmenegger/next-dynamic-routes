export default function Slug({testParam}: any) {
    return <div>slug: {testParam}</div>
}


export async function getStaticPaths() {
    return { 
        paths: [
            {params: {slug: ["foo"]}},
            {params: {slug: ["foo", "bar"]}}
        ],
        fallback: false
    }
}

export async function getStaticProps({params}: any) {
    return {
        props: {testParam: params.slug}
    }
}