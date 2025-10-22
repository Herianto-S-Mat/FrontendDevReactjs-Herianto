import Card from "@/components/commons/Card";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full min-h-screen max-w-3xl gap-5 flex-col p-5 bg-white dark:bg-black">
        <header className="flex flex-col gap-5">
          <h1 className="text-3xl">Create Next App</h1>
          <p className="text-sm max-w-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem, sed, velit ratione perferendis voluptate necessitatibus ab autem commodi aspernatur incidunt cupiditate quidem! At officiis doloremque reprehenderit repellat beatae? Molestiae?</p>
        </header>
        <div className="flex justify-between border-y border-amber-400 p-5">
          <div className="flex gap-5">
            <div className="border w-5 h-5"></div>
            <div className="border w-5 h-5"></div>
            <div className="border w-5 h-5"></div>
          </div>
          <div className="flex gap-5">
            <div className="border w-5 h-5"></div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-xl">Grid</h2>
          <div className="grid grid-cols-4 gap-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            
          </div>
          <button className="mx-auto max-w-sm  w-full border">see more</button>
        </div>
      </main>
    </div>
  );
}
