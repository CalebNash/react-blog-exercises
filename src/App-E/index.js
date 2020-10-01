import React from 'react';
import BlogListing from './BlogListing.js'
import BlogForm from './BlogForm.js'

class BlogApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    }

    this.createBlog = this.createBlog.bind(this);
    this.removeBlog = this.removeBlog.bind(this);
    this.editBlog = this.editBlog.bind(this);
  }

  removeBlog(blog){
    const blogs = [...this.state.blogs];
    const index = blogs.indexOf(blog);
    blogs.splice(index, 1);
    this.setState({blogs});
  }

createBlog(blog) {
  const blogs = [...this.state.blogs, blog];
  this.setState({blogs});
}

  componentDidMount() {
    const blogs = [
      {
        title: `Bill Murray’s golf brand has a choice reply for Doobie Brothers’ hilarious complaint`,
        body: `In 2020, what the people need is a way to make them smile.
        Bill Murray's golf brand and the Doobie Brothers may have done just that.
        On Wednesday, the Doobie Brothers sent Murray a humorously worded letter complaining that William Murray Golf was using the band's music without financial compensation.
        On Friday, the firm representing Murray’s golf company, Yoffe & Cooper, fired back with some equally witty retorts.
        Lawyer Peter T. Paterno first called out the Emmy-winning actor for using the Doobie song "Listen to the Music" in ads without proper payment.
        "It's a fine song," Paterno wrote. "I know you agree because you keep using it in ads for your Zero Hucks Given golf shirts. However, given that you haven't paid to use it, maybe you should change the company name to 'Zero Bucks Given.'"
        The shirt in question is described online as a "wink and a nod" to a hero of Murray's, author Mark Twain, and his Huckleberry Finn character.
        "It seems like the only person who uses our clients' music without permission more than you do is Donald Trump," Paterno wrote, alluding to Trump's repeated use of artists' music without their consent.
        "This is the part where I'm supposed to cite the United States Copyright Act, excoriate you for not complying with some subparagraph that I'm too lazy to look up and threaten you with eternal damnation for doing so," Paterno wrote. "But you already earned that with those Garfield movies."
        (Murray did voice the cartoon cat in both "Garfield: The Movie" and "Garfield: A Tail of Two Kitties." Apparently, that was a tale of miscommunication he now regrets.)
        The Doobies' lawyer fired off one more comedic shot — this one a jab at Murray's iconic "Caddyshack" role — before signing off.
        "We'd almost be OK with it if the shirts weren't so … ugly," Paterno wrote. "But it is what it is. So in the immortal words of Jean Paul Sartre, 'Au revoir Golfer. Et payez!'"
        Murray's lawyer wrote back, "First, I would like to compliment you on finding levity in the law at a time when the world and this country certainly could use a laugh. Your client's demand was able to cut through the noise of the news cycle and remind us how much we all miss live music these days."
        (The band's most recent show at the end of August was rescheduled for August 2021 due to the ongoing COVID-19 pandemic. )
        The lawyer representing Murray's company, Alexander Yoffe, went on to tip his client's hat to some of the band's other music.
        "We would also like to confirm that both our firm, and the good folks at William Murray Golf, are indeed fans of the Doobie Brothers' music," Yoffe wrote. "Which is why we appreciate your firm's choice of 'Takin' It to the Streets,' rather than to the courts, which are already overburdened 'Minute by Minute' with real problems."
        Before sending the Doobie Brothers' firm off with some amicable parting words, Yoffe & Cooper, LLP did ask for the band members' shirt sizes and offered to upgrade their wardrobes.
        "In the immortal words of Mr. Murray — the more relaxed you are, the better you are at everything," Yoffe wrote. "So let's pour one up and unwind with a listen of the recently released 'Quadio' box set and plan to cross paths at a Doobie Brothers' 50th anniversary show in 2021 when some level of normalcy resumes."`
      },
      {
        title: `Bill Murray goes on the town in ‘On the Rocks’`,
        body: `“On the Rocks” is minor work from Sofia Coppola, but even minor work can have its pleasures if Bill Murray is involved. It marks the first time the two have worked together on a film since “Lost in Translation” (2003), a turning point for both actor and director. And both actor and director have experienced high and low points in the 17 years since. The new film is neither. It’s an agreeable diversion. Opening at the Kendall Square Friday, it starts streaming on Apple TV+ Oct. 23.
        “On the Rocks” also has Rashida Jones, who’s capable of something few actors manage: She makes thinking dramatically interesting. Her role as Laura, a stalled writer, frazzled mother, and neglected wife, is largely reactive at first. Laura’s exhausted, she’s in a funk, and her husband, Dean (Marlon Wayans), is away all the time raising money for his tech startup. A shot of Laura in line at her daughter’s school, listening/not listening to a fellow privileged mom (a very funny Jenny Slate) gas on about her dating life, sums up Laura’s sleep-walking existence in a nutshell.
        Then she starts suspecting Dean may be knocking heels with his assistant Fiona (Jessica Henwick, from “Game of Thrones”), who is smart, funny, chic, thin — every wife’s nightmare. Here’s where Murray enters the picture as Laura’s father, Felix, a semi-retired art dealer and jet-setting gadabout who returns to town just in time to be the devil on his daughter’s shoulder. There is no angel.
        Felix assumes that all men are cads like him so therefore Dean is cheating, and “On the Rocks” hits its easygoing stride as he goads Laura into father-daughter spying missions. The movie comes this close to screwball comedy but lacks the energy to switch into antic gear; instead, it cruises along in second until the final act, when it sputters out like Felix’s vintage Alfa Romeo. There is a car chase up the avenues of nighttime Manhattan, one that ends with a police stop and a masterful bit of social engineering by Felix. He’s an embarrassing old roué and a force of nature, great company even as he drives his daughter batty with his non-stop flirtations.
        Felix is the kind of guy who will look at a waitress, say “ballet dancer,” and be right. Worse, it works. He has only one real sin: He likes his steak well done. I think Bill Murray is the only person on the planet who could pull this role off.
        Because it’s a Sofia Coppola movie, “On the Rocks” takes place in a luxe universe that is lovely to visit — cinematographer Philippe Le Sourd films everything in soft, glowing colors — even as you may feel a little priced out. For all of Laura’s misery, she lives in a sunny SoHo loft and she doesn’t have to work. There are side trips to Mexico and mansions out in the country (where the heroine’s grandmother is played by Barbara Bain, of the “Mission: Impossible” TV universe long ago). Her children never have a tantrum and Coppola’s house band, Phoenix, provides the streamlined soundtrack. “On the Rocks” makes the houses in Nancy Meyers movies look like dumps.
        None of this is bad — we go to movies to escape, now more than ever — but it does feel rather inconsequential by the time “On the Rocks” resolves its plot with a whimper rather than a bang. The film’s real drama lies inside Laura’s head as she comes to terms with her father’s charming betrayals while trying to pull herself out of her rut. Jones makes the dilemma matter but she needs a stronger structure on which to hang the tale than a sweet, tired “Is my husband cheating?” story line. The film’s an amuse bouche made by people with the skills for a banquet. Don’t be surprised if you come away feeling a little empty inside.`
      },
      {
        title: `The Doobie Brothers Wrote Bill Murray the Best Cease and Desist Letter`,
        body: `The post The Doobie Brothers Wrote Bill Murray the Best Cease and Desist Letter appeared first on Consequence of Sound.
        Get ready to read the most random story of the week! Apparently Bill Murray has his own golf apparel brand (!) called William Murray Golf, and he’s been using The Doobie Brothers’ classic hit “Listen to the Music” to promote his newest product without the band’s permission. As such, the band has mailed him a letter requesting he stop or pay up — except this is a legendary comedian and actor, so the note is a whole lot funnier than what it typically would be for this sort of thing.
        As Stereogum notes, this saga began when Murray started running new ads promoting William Murray Golf’s latest shirt named Zero Hucks Given, a play on Huckleberry Finn, one of his favorite literary characters. However, the Caddyshack actor’s company never contacted The Doobie Brothers to seek permission or compensate the band for the use of their song. Understandably, the Doobies would like some of the cash he’s raking in.
        Peter T. Paterno, a representative for the recent Rock and Roll Hall of Fame inductees, penned a letter to Murray with the band’s permission that essentially meets the actor on his own level to hash out a deal. “It’s a fine song. I know you agree because you keep using it in ads for your Zero Hucks Given golf shirts,” wrote Paterno. “However, given that you haven’t paid to use it, maybe you should change the name to ‘Zero Bucks Given.'”
        “This is the part where I’m supposed to cite the United States Copyright Act, excoriate you for not complying with some subparagraph that I’m too lazy to look up and threaten you with eternal damnation for doing so,” the letter reads. “But you already earned that with those Garfield movies. And you already know that you can’t use music in ads without paying for it.”
        Editors' Picks
        The letter gets even better from there. Read it in full below. Update: Through his lawyer, has responded to Doobie Brothers by offering golf shirts as restitution.
        “Dear Mr. Murray:
        We’re writing on behalf of our clients, the Doobie Brothers. The Doobie Brothers perform and recorded the song Listen to the Music, which Tom Johnston of the Doobie Brothers wrote. It’s a fine song. I know you agree because you keep using it in ads for your Zero Hucks Given golf shirts. However, given that you haven’t paid to use it, maybe you should change the name to “Zero Bucks Given.”
        We understand that you’re running other ads using music from other of our clients. It seems like the only person who uses our clients’ music without permission more than you do is Donald Trump.
        This is the part where I’m supposed to cite the United States Copyright Act, excoriate you for not complying with some subparagraph that I’m too lazy to look up and threaten you with eternal damnation for doing so. But you already earned that with those Garfield movies. And you already know that you can’t use music in ads without paying for it.
        We’d almost be OK with it if the shirts weren’t so damn ugly. But it is what it is. So in the immortal words of Jean Paul Sartre, “Au revoir Golfer. Et payez!”
        Sincerely,Peter T. Paternoof King, Holmes, Paterno & Soriano LLP”`
      }
    ];
    this.setState({blogs});
  }

  editBlog(index, updatedBlog){
    const blogs = [...this.state.blogs];
    blogs[index] = updatedBlog;
    this.setState({blogs});
  }

  render() {
    return(
      <div className="row">
        <BlogListing blogs={this.state.blogs} removeBlog={this.removeBlog} editBlog={this.editBlog}/>
        <BlogForm createBlog={this.createBlog}/>
      </div>
    )
  }

}
export default BlogApp;
