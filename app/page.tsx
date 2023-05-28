import Feed from "@/components/Feed"

export const metadata = {
  title: 'Prompt AI',
  description: 'Share AI searches'
}

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Imaging & Share
        <br className=""/>
        <span className="orange_gradient">
          AI-powered Search
        </span> 
      </h1>

      <p className="description text-center">
        This is a open-source AI-powered project tool for imaging and share Prompts
      </p>

      <Feed />
    </section>
  )    
}
