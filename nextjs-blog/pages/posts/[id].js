// NextJS imports
import Head from "next/head";

// Components
import Layout from "../../components/layout";
import Date from "../../components/date";

// Local functions
import { getAllPostIds, getPostData } from "../../lib/posts";

// Styles
import utilStyles from "../../styles/utils.module.css";

// Data needed to render the post
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// Get all possible values for the route [id]
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// React component to render
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
