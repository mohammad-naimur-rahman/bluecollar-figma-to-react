import BreadCrumb from '@components/ui/BreadCrumb'
import Layout from '@components/ui/Layout'
import bg from '@assets/images/blog/bg.jpg'
import BlogPost from '@components/page/BlogSingle/BlogPost'
import BlogComment from '@components/page/BlogSingle/BlogComment'
import MoreBlogs from '@components/page/BlogSingle/MoreBlogs'

const Blog = () => {
  return (
    <Layout title="Blog Single">
      <BreadCrumb img={bg} title="Improve Workflow with Bluecollar Construction" />
      <BlogPost />
      <BlogComment />
      <MoreBlogs />
    </Layout>
  )
}

export default Blog
