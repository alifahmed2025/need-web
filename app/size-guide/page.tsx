import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Ruler } from "lucide-react"

export default function SizeGuidePage() {
  return (
    <>
      <TopBar />
      <Header />

      <div className="min-h-screen bg-background">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Size Guide</h1>
            <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Find your perfect fit with our comprehensive size charts
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto space-y-12">
            <section className="bg-accent/10 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Ruler className="h-8 w-8 text-accent" />
                <h2 className="text-2xl font-bold">How to Measure</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">For Clothing:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <strong>Chest:</strong> Measure around the fullest part of your chest
                    </li>
                    <li>
                      <strong>Waist:</strong> Measure around your natural waistline
                    </li>
                    <li>
                      <strong>Hips:</strong> Measure around the fullest part of your hips
                    </li>
                    <li>
                      <strong>Sleeve:</strong> Measure from center back neck to wrist
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">For Shoes:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Stand on a piece of paper</li>
                    <li>Mark the longest part of your foot</li>
                    <li>Measure the distance in centimeters</li>
                    <li>Compare with our size chart below</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Men's Clothing</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border p-3 text-left">Size</th>
                      <th className="border p-3 text-left">Chest (inches)</th>
                      <th className="border p-3 text-left">Waist (inches)</th>
                      <th className="border p-3 text-left">Hips (inches)</th>
                      <th className="border p-3 text-left">Sleeve (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3 font-semibold">S</td>
                      <td className="border p-3">34-36</td>
                      <td className="border p-3">28-30</td>
                      <td className="border p-3">34-36</td>
                      <td className="border p-3">32-33</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border p-3 font-semibold">M</td>
                      <td className="border p-3">38-40</td>
                      <td className="border p-3">32-34</td>
                      <td className="border p-3">38-40</td>
                      <td className="border p-3">33-34</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-semibold">L</td>
                      <td className="border p-3">42-44</td>
                      <td className="border p-3">36-38</td>
                      <td className="border p-3">42-44</td>
                      <td className="border p-3">34-35</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border p-3 font-semibold">XL</td>
                      <td className="border p-3">46-48</td>
                      <td className="border p-3">40-42</td>
                      <td className="border p-3">46-48</td>
                      <td className="border p-3">35-36</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-semibold">XXL</td>
                      <td className="border p-3">50-52</td>
                      <td className="border p-3">44-46</td>
                      <td className="border p-3">50-52</td>
                      <td className="border p-3">36-37</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Women's Clothing</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border p-3 text-left">Size</th>
                      <th className="border p-3 text-left">Bust (inches)</th>
                      <th className="border p-3 text-left">Waist (inches)</th>
                      <th className="border p-3 text-left">Hips (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3 font-semibold">S</td>
                      <td className="border p-3">32-34</td>
                      <td className="border p-3">24-26</td>
                      <td className="border p-3">34-36</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border p-3 font-semibold">M</td>
                      <td className="border p-3">36-38</td>
                      <td className="border p-3">28-30</td>
                      <td className="border p-3">38-40</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-semibold">L</td>
                      <td className="border p-3">40-42</td>
                      <td className="border p-3">32-34</td>
                      <td className="border p-3">42-44</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border p-3 font-semibold">XL</td>
                      <td className="border p-3">44-46</td>
                      <td className="border p-3">36-38</td>
                      <td className="border p-3">46-48</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-semibold">XXL</td>
                      <td className="border p-3">48-50</td>
                      <td className="border p-3">40-42</td>
                      <td className="border p-3">50-52</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Shoe Sizes</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Men's Shoes</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border p-3 text-left">US Size</th>
                          <th className="border p-3 text-left">UK Size</th>
                          <th className="border p-3 text-left">EU Size</th>
                          <th className="border p-3 text-left">CM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">7</td>
                          <td className="border p-3">6</td>
                          <td className="border p-3">40</td>
                          <td className="border p-3">25.0</td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border p-3">8</td>
                          <td className="border p-3">7</td>
                          <td className="border p-3">41</td>
                          <td className="border p-3">25.7</td>
                        </tr>
                        <tr>
                          <td className="border p-3">9</td>
                          <td className="border p-3">8</td>
                          <td className="border p-3">42</td>
                          <td className="border p-3">26.4</td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border p-3">10</td>
                          <td className="border p-3">9</td>
                          <td className="border p-3">43</td>
                          <td className="border p-3">27.1</td>
                        </tr>
                        <tr>
                          <td className="border p-3">11</td>
                          <td className="border p-3">10</td>
                          <td className="border p-3">44</td>
                          <td className="border p-3">27.8</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Women's Shoes</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border p-3 text-left">US Size</th>
                          <th className="border p-3 text-left">UK Size</th>
                          <th className="border p-3 text-left">EU Size</th>
                          <th className="border p-3 text-left">CM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">6</td>
                          <td className="border p-3">4</td>
                          <td className="border p-3">37</td>
                          <td className="border p-3">23.0</td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border p-3">7</td>
                          <td className="border p-3">5</td>
                          <td className="border p-3">38</td>
                          <td className="border p-3">23.7</td>
                        </tr>
                        <tr>
                          <td className="border p-3">8</td>
                          <td className="border p-3">6</td>
                          <td className="border p-3">39</td>
                          <td className="border p-3">24.4</td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border p-3">9</td>
                          <td className="border p-3">7</td>
                          <td className="border p-3">40</td>
                          <td className="border p-3">25.1</td>
                        </tr>
                        <tr>
                          <td className="border p-3">10</td>
                          <td className="border p-3">8</td>
                          <td className="border p-3">41</td>
                          <td className="border p-3">25.8</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-muted/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Still Not Sure?</h2>
              <p className="text-muted-foreground mb-4">
                If you're between sizes or need help choosing the right size, our customer service team is here to
                assist you.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Phone:</strong> +880 1234-567890
                </p>
                <p>
                  <strong>Email:</strong> support@nedd.com
                </p>
                <p>
                  <strong>WhatsApp:</strong> +880 1234-567890
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
