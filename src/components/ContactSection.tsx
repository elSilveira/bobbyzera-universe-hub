
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-t from-bobby-dark to-bobby-background">
      <div className="container">
        <Card className="max-w-2xl mx-auto bg-bobby-dark/50 border-bobby-purple/20">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              Contact
            </h2>
            <p className="text-center text-gray-300 mb-6">
              For business inquiries:
            </p>
            <div className="flex justify-center">
              <Button
                className="bg-bobby-purple hover:bg-bobby-purple/80"
                asChild
              >
                <a href="mailto:bobbyzera@kr3w.gg">bobbyzera@kr3w.gg</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
