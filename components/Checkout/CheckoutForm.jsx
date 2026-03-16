import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardTitle, CardHeader, CardContent } from "../ui/card";
export default function CheckoutForm() {
  return (
    <div className="mx-auto min-h-screen grid max-w-7xl gap-6 lg:grid-cols-3">
      <form className="space-y-6 lg:col-span-2">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="email@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="phone"
                name="phone"
                placeholder="+49 123 456789"
                required
              />
            </div>
          </CardContent>
        </Card>
        <Button type="submit" size="lg" className="w-ful rounded-xl">
          Place Order
        </Button>
      </form>
    </div>
  );
}
