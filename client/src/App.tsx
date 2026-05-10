import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";

function App() {
   return (
      <div className="w-full flex justify-center">
         <Card className="w-full max-w-sm bg-black rounded-sm text-white">
            <CardHeader>
               <CardTitle>Hello World</CardTitle>
               <CardDescription>Shadcn ui card</CardDescription>
            </CardHeader>

            <CardContent>
               <h2>Olá</h2>
            </CardContent>
         </Card>
      </div>
   );
}

export default App;
