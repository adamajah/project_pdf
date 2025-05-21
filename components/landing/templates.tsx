import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Templates() {
  const templates = [
    {
      id: "minimal",
      name: "Minimal",
      image: "https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Clean and straightforward design perfect for most professional roles"
    },
    {
      id: "professional",
      name: "Professional",
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Traditional layout ideal for corporate and management positions"
    },
    {
      id: "creative",
      name: "Creative",
      image: "https://images.pexels.com/photos/8867426/pexels-photo-8867426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Modern design with unique elements for creative industry professionals"
    }
  ];

  return (
    <section id="templates" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Choose your perfect template</h2>
          <p className="text-muted-foreground">
            Select from our professionally designed templates to create a standout CV
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div key={template.id} className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={template.image}
                  alt={`${template.name} template`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">{template.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{template.description}</p>
                <Link href={`/builder?template=${template.id}`}>
                  <Button className="mt-4 w-full">Use this template</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}