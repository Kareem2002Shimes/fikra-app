import { NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import Replicate from 'replicate';

export default async function handler(req: NextRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // 1. Get request data (in JSON format) from the client
      const { image, theme, room }: any = req.body;

      // 2. Initialize the replicate object with Replicate API token
      const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN as string,
      });

      // 3. Set the model that we're about to run
      const model =
        'jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b';

      // 4. Set the input for the model
      const input = {
        image,
        prompt: `A ${theme} ${room} Editorial Style Photo, Symmetry, Straight On, Modern Living Room, Large Window, Leather, Glass, Metal, Wood Paneling, Neutral Palette, Ikea, Natural Light, Apartment, Afternoon, Serene, Contemporary, 4k`,
        a_prompt: `best quality, extremely detailed, photo from Pinterest, interior, cinematic photo, ultra-detailed, ultra-realistic, award-winning`,
      };

      // 5. Run the Replicate's model (to remove background) and get the output image
      const output = await replicate.run(model, { input });

      // 6. Check if the output exists
      if (!output) {
        console.error('Failed to process image');
        return res.status(500).json({ error: 'Failed to process image' });
      }

      // 7. Return the output back to the client
      console.log('Output:', output);
      res.status(201).json({ output });
    } catch (error) {
      console.error('Error processing image:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
