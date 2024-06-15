import React from 'react';
import { Paper, Typography, Grid, Button } from '@mui/material';
import image1 from '../assets/image1.jpg';

const BlogPage = () => {

  const sampleBlog = {
    id: 1,
    title: 'Sample Blog Title',
    description: 'This is a sample blog description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: `South Africa once again has a national unity government, 30 years after a similar deal helped stabilise the transition to full democracy from a nation divided by the racist system of apartheid.
    This time the ruling African National Congress (ANC) was forced to negotiate an agreement after losing its controlling majority in elections.
    It marks a landmark moment for the country, with the confirmation that the ANC's new partners include the white-led Democratic Alliance - a pairing once considered unimaginable by many in South Africa.
    The main opposition DA party grew out of a union of groups which included what was left of the apartheid-era ruling National Party, and is an advocate of free-market economics at odds with the ANC’s left-wing traditions.
    It is still possible that ANC breakaway parties that have not joined the unity government could try to influence events from the outside but the agreement gave shape to South Africa's political future as its new parliament gathered on Friday for the first time since last month's historic elections.
    "Today, the 14th of June 2024 will go down in the annals of history as the start of a new chapter for our beloved country," said DA leader John Steenhuisen in a statement delivered in Cape Town, where parliament was meeting.
    More detail, including the breakdown of cabinet posts, is expected to emerge in the coming days. But this is not a national unity alliance like the one negotiated by Nelson Mandela in 1994.
    At that time the ANC reached across the divide from a position of strength. Now it is doing so from a position of political necessity.
    The composition is similar. Thirty years ago the ANC joined forces with the National Party that ruled during apartheid, and the Zulu nationalist Inkhata Freedom Party (IFP).
    The IFP has already confirmed it is on board again, alongside the smaller Patriotic Alliance, meaning Cyril Ramaphosa will enjoy another term as president.
    But "this is not a government of national unity", says TK Pooe from the Wits University School of Governance in Johannesburg.
    "It’s just a bit of camouflaging so that people don’t have to own that it’s a grand coalition."
    That is because it does not include the parties which came third and fourth in the election - the uMkhonto weSizwe (MK) party of former President Jacob Zuma and the radical Economic Freedom Fighters (EFF) which is popular with urban black youth.
    Few doubt that negotiations since the 29 May elections have been difficult.
    Many in South Africa are now asking themselves one simple question - will it work?
    Fikilie Mbalula, the ANC's secretary general, has stressed "gravitating to the centre" was the best response to a message from voters, who wanted parties to work together to bring stability to South Africa.
    But the political disagreements between the new coalition's two main parties are sometimes stark.
    Perhaps the biggest and most contentious issues are DA opposition to the ANC's national healthcare policy, and its black economic empowerment programme.`,
    authorName: 'John Doe',
    category: 'Technology',
};

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '800px', margin: 'auto', marginTop: '25px' }}>
      <Typography variant="h4" gutterBottom>
        {sampleBlog.title}
      </Typography>
      <img src={image1} width="100%" height="400px" ></img>
      <Typography variant="subtitle1" gutterBottom>
        Category: {sampleBlog.category}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
        By {sampleBlog.authorName}
      </Typography>
      <Typography variant="body1" paragraph style={{marginTop: '20px'}}>
        {sampleBlog.content}
      </Typography>
    </Paper>
  );
};

export default BlogPage;
