import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export default function WritePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
          <Link href="/" className="text-2xl font-serif font-bold">
            Pencraft
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="rounded-full">
              Save draft
            </Button>
            <Button className="rounded-full bg-green-600 hover:bg-green-700">Publish</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 max-w-3xl">
        <div className="space-y-6">
          <Input
            type="text"
            placeholder="Title"
            className="text-4xl font-serif font-bold border-none shadow-none focus-visible:ring-0 px-0 placeholder:text-gray-300"
          />
          <Input
            type="text"
            placeholder="Subtitle"
            className="text-xl text-muted-foreground border-none shadow-none focus-visible:ring-0 px-0 placeholder:text-gray-300"
          />
          <div className="w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
            <Button variant="outline" className="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 mr-2"
              >
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                <line x1="16" x2="22" y1="5" y2="5" />
                <line x1="19" x2="19" y1="2" y2="8" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              Add cover image
            </Button>
          </div>
          <Textarea
            placeholder="Tell your story..."
            className="min-h-[400px] text-lg border-none shadow-none focus-visible:ring-0 px-0 placeholder:text-gray-300"
          />
        </div>
      </main>
    </div>
  )
}
