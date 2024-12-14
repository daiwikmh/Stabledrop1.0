import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '../ui/accordion' ;
  import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
  import { useNavigate } from "react-router-dom";
  import SignInPage from '../../components/explore/signin'


  

  const explore: React.FC = () => {
    const navigate = useNavigate(); // For navigation

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Revolutionize Your Airdrop & Staking Experience
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Deposit any stable currency, get airdrop rewards, and earn through staking. All in one platform.
          </p>
          <div className="mt-6 space-x-4">
          
          <Button size="lg" onClick={() => navigate("/signin")}>
              Get Started
            </Button>
           
            <Button variant="outline" size="lg">
              Learn More
            </Button>
            
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold sm:text-5xl text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Deposit Stablecoins</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Deposit any stable currency of your choice into our secure platform.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Automatic Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We automatically convert your deposit to eligible tokens for airdrops.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Earn Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Receive airdrop rewards and earn APR through staking, all in one place.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold sm:text-5xl text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>What stable currencies can I deposit?</AccordionTrigger>
              <AccordionContent>
                You can deposit any major stablecoin, including USDT, USDC, DAI, and more. Our platform automatically
                converts your deposit to the required tokens for airdrops.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I receive airdrop rewards?</AccordionTrigger>
              <AccordionContent>
                Once you deposit, our system automatically participates in eligible airdrops on your behalf. Rewards are
                distributed directly to your account on our platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What are the staking APR rates?</AccordionTrigger>
              <AccordionContent>
                Staking APR rates vary depending on market conditions and the specific tokens. You can view current
                rates in your dashboard after signing up.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t bg-white">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Airdrop Staking Platform. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a href="#" className="text-sm hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:underline">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
};

export default explore;
