import Navbar from "../../Navbar/Navbar";
import FeedBox from "../../newsFeed/FeedBox";
import Popular from "../../newsFeed/Popular";
import SideCard from "../../newsFeed/SideCard";
import CreatePostAndCommunity from "../../newsFeed/CreatePostAndCommunity";
import Footer from "../../Footer/Footer";

const POST = [
  {
    id: 1,
    avatar:
      "https://images.pexels.com/photos/7029081/pexels-photo-7029081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Kenny",
    title: "This community is good!",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non quod facilis laborum rerum ut iure dicta id aspernatur libero, velit sed sit autem in sequi reiciendis nemo nam ullam.",
    interactions: 220,
  },
  {
    id: 2,
    avatar:
      "https://images.pexels.com/photos/8123643/pexels-photo-8123643.jpeg?cs=srgb&dl=pexels-serkan-bayraktar-8123643.jpg&fm=jpg",
    name: "Christ",
    title: "How do I cook an egg?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non quod facilis laborum rerum ut iure dicta id aspernatur libero, velit sed sit autem in sequi reiciendis nemo nam ullam.",
    interactions: 582,
  },
  {
    id: 3,
    avatar:
      "https://images.pexels.com/photos/7693210/pexels-photo-7693210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Ellena",
    title: "I got fired from my previous company, what should I do?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iste officiis laboriosam dolor fugiat hic dolorem sunt ipsum. Doloribus hic autem fugit sunt optio dignissimos, libero velit, vero alias, molestias architecto! Error saepe, ratione id voluptas voluptatem eius similique, culpa, nostrum tempore natus fugiat facilis laborum eum temporibus expedita quasi sapiente tempora dicta? Labore nam, magni dolor quisquam officia minima totam deleniti placeat eius a obcaecati. Dolores recusandae necessitatibus magnam explicabo quia magni ipsum odit quisquam at saepe, natus pariatur tenetur accusamus. Voluptate tempore impedit velit. Perferendis quos aperiam consectetur est, quam blanditiis, qui animi dolore optio ex ratione itaque voluptatem consequuntur quae tempore, possimus vitae nulla hic tempora porro laborum. Ipsam, quas iste maiores dolorum deleniti enim ab. Possimus accusantium quasi, unde ad, quas quis, autem dolorum cumque reiciendis inventore quod. Incidunt culpa assumenda laborum commodi cum! Consequatur consequuntur quod tenetur recusandae pariatur dolore similique reprehenderit distinctio nulla laborum accusantium saepe, quae amet architecto unde explicabo maxime facilis voluptatibus, est vel libero debitis ad. Praesentium eius dignissimos omnis asperiores molestias necessitatibus, harum quae sint vitae veritatis molestiae facere sapiente quasi libero voluptates repellat id. Quas nobis corrupti alias voluptatem cupiditate, nesciunt perferendis asperiores blanditiis sunt, voluptatibus odit eum tenetur molestiae ex omnis, temporibus sed commodi debitis eligendi quidem nisi unde? Qui ducimus, obcaecati voluptatibus ullam perferendis iusto dignissimos magnam maxime libero! Voluptate, blanditiis animi explicabo modi aliquam optio expedita vero quidem fugit nemo excepturi aperiam eveniet ducimus! Deleniti dolorum ratione reiciendis repudiandae atque voluptates saepe aperiam in et ad.",
    interactions: 340,
  },
  {
    id: 4,
    avatar:
      "https://images.pexels.com/photos/7945745/pexels-photo-7945745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Lily",
    title:
      "Yesterday was my birth day, I prepared everything already, but everyone didn't come.",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, incidunt quo harum quidem animi quia aut, velit voluptatem corrupti unde natus assumenda accusantium ad fuga quasi porro doloremque iusto perferendis exercitationem totam voluptatum nemo maiores culpa! Repellendus, eos nisi? Vero suscipit quas facilis accusamus pariatur accusantium, quos cupiditate id fugit culpa enim molestias, officia quo incidunt reprehenderit, ducimus quod quae rerum. Ut deserunt voluptatibus unde rem expedita officiis iste similique id quo dolor. Alias ipsam at nostrum rerum saepe, quasi perferendis omnis dolorem, porro eveniet totam aspernatur nihil suscipit doloribus unde? Accusamus assumenda in quos facere sint nulla repellendus culpa iste error explicabo aspernatur est saepe illum excepturi maxime magni magnam quisquam tenetur sit architecto possimus eveniet, distinctio, mollitia accusantium? Recusandae ea atque et beatae perferendis rerum laborum cumque sunt magni dolor ullam vel cupiditate reiciendis maxime, praesentium laboriosam error saepe tempora! Beatae inventore neque deserunt aliquam tenetur sint nobis minus architecto nihil dolorem ipsam et voluptatibus, rerum velit mollitia unde praesentium? Quasi quo inventore, distinctio illo odio, vero fugit repudiandae similique perferendis autem architecto? Laborum, ducimus beatae ut illo libero veniam nihil officiis expedita labore explicabo autem, quas harum asperiores ad dolorum quaerat. Sequi sed totam officia eveniet quos fugiat quis, porro magnam at cumque perferendis quasi consectetur atque harum consequuntur voluptatibus molestiae quo accusantium incidunt aspernatur, obcaecati fuga. Quibusdam natus dolores voluptate quos ullam praesentium, ipsa, quo perspiciatis sit, deserunt facere voluptatibus. Quidem odit accusantium, natus nisi vero fuga error animi dolor? Eius ratione eum quo aperiam at quasi id numquam, maiores cum sint qui officia et debitis veritatis ea aliquid similique deserunt exercitationem facilis quae? Provident suscipit quasi numquam sequi assumenda delectus officia eius voluptates excepturi modi, optio hic illo consectetur commodi voluptatum id quibusdam distinctio iure nihil, quam adipisci labore, ullam deleniti. Quidem deleniti non iure architecto corrupti, voluptatum sunt esse dicta magnam ut perferendis natus laudantium, quod explicabo numquam, odio ipsam? Enim dolorum eligendi ut quas harum! Necessitatibus qui aperiam debitis perspiciatis atque voluptatum eos sapiente inventore, ipsum illo nobis officiis nam, voluptatem sequi. Nemo quod natus voluptatem distinctio deleniti id mollitia pariatur officia esse ut, sapiente voluptas voluptatum! Odit quia delectus adipisci dolores quidem harum exercitationem ipsum assumenda perspiciatis vel sed repellat impedit fugit excepturi repellendus, veritatis nemo at nulla id debitis praesentium! Autem quos quo, laudantium necessitatibus nulla non dicta soluta nisi! Libero corporis, fugit dignissimos quia cupiditate quos sed unde harum sapiente, repudiandae quisquam provident voluptas enim? Enim consequatur libero saepe aspernatur vitae corporis minima fugit autem assumenda minus harum magnam ab iure aperiam molestiae possimus unde, blanditiis ducimus? At officia sit nihil totam obcaecati dolore, cupiditate rerum iure! Cupiditate magnam maiores aliquam temporibus sint fugit similique distinctio tempora sequi earum architecto porro qui adipisci repellat doloremque delectus, ipsum quam molestiae numquam. Quasi aliquid iure quam numquam unde iusto suscipit veritatis voluptatum, iste quidem, dicta temporibus nulla blanditiis reprehenderit alias porro nihil aspernatur fuga minima consequuntur. Explicabo modi enim ipsa aspernatur quibusdam, ad sapiente corporis, labore exercitationem perferendis, id fuga at laudantium.",
    interactions: 2582,
  },
];

function Main() {
  return (
    <div>
      <div className="container">
        <div className="sideCard">
          <SideCard />
          <br />
          <CreatePostAndCommunity />
          <br />
          <Footer />
          <br />
        </div>
        <Popular />
        {POST.map((item) => (
          <FeedBox key={item.id} item={item} />
        ))}
      </div>
      <p></p>
    </div>
  );
}

export default Main;
