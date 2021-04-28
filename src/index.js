import React from 'react';
import ReactDOM from 'react-dom';

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: 'Helló, világ', content: 'Üdvözlünk a React tanulói kurzusában!' },
  { id: 2, title: 'Telepítés', content: 'A React-et npm-ből tudod telepíteni.' },
  { id: 3, title: 'Teszt 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nibh maximus, euismod mauris ut, placerat felis. Praesent at sapien non nunc cursus sollicitudin. Nulla non mattis diam. Proin eu facilisis est. Integer vitae risus consectetur, ullamcorper nisl in, facilisis mauris. Praesent elementum nec nulla vel vestibulum. Nulla non lectus et turpis feugiat pretium. Quisque hendrerit nisi in magna laoreet feugiat. Integer faucibus neque mauris, sed euismod massa fermentum quis. Sed nisi ante, porta eget turpis in, aliquam scelerisque dolor. Nullam et euismod ante, tempus porta nulla. Quisque bibendum mollis venenatis. Vestibulum tempus mi non vestibulum commodo. Sed lobortis ante ac ex egestas, a volutpat urna tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, nibh quis euismod tempor, risus metus dictum nisl, eu lobortis nisl felis ac elit. Morbi iaculis consectetur imperdiet. Morbi pharetra tortor interdum nibh vestibulum egestas. Aliquam tincidunt neque tellus, non vulputate ligula iaculis nec. Vestibulum dui quam, pulvinar ac ligula vitae, commodo sollicitudin tortor. Fusce quis neque ullamcorper est fringilla maximus. Cras laoreet commodo risus, nec feugiat quam ullamcorper id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, title: 'Teszt 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nibh maximus, euismod mauris ut, placerat felis. Praesent at sapien non nunc cursus sollicitudin. Nulla non mattis diam. Proin eu facilisis est. Integer vitae risus consectetur, ullamcorper nisl in, facilisis mauris. Praesent elementum nec nulla vel vestibulum. Nulla non lectus et turpis feugiat pretium. Quisque hendrerit nisi in magna laoreet feugiat. Integer faucibus neque mauris, sed euismod massa fermentum quis. Sed nisi ante, porta eget turpis in, aliquam scelerisque dolor. Nullam et euismod ante, tempus porta nulla. Quisque bibendum mollis venenatis. Vestibulum tempus mi non vestibulum commodo. Sed lobortis ante ac ex egestas, a volutpat urna tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, nibh quis euismod tempor, risus metus dictum nisl, eu lobortis nisl felis ac elit. Morbi iaculis consectetur imperdiet. Morbi pharetra tortor interdum nibh vestibulum egestas. Aliquam tincidunt neque tellus, non vulputate ligula iaculis nec. Vestibulum dui quam, pulvinar ac ligula vitae, commodo sollicitudin tortor. Fusce quis neque ullamcorper est fringilla maximus. Cras laoreet commodo risus, nec feugiat quam ullamcorper id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 5, title: 'Teszt 5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nibh maximus, euismod mauris ut, placerat felis. Praesent at sapien non nunc cursus sollicitudin. Nulla non mattis diam. Proin eu facilisis est. Integer vitae risus consectetur, ullamcorper nisl in, facilisis mauris. Praesent elementum nec nulla vel vestibulum. Nulla non lectus et turpis feugiat pretium. Quisque hendrerit nisi in magna laoreet feugiat. Integer faucibus neque mauris, sed euismod massa fermentum quis. Sed nisi ante, porta eget turpis in, aliquam scelerisque dolor. Nullam et euismod ante, tempus porta nulla. Quisque bibendum mollis venenatis. Vestibulum tempus mi non vestibulum commodo. Sed lobortis ante ac ex egestas, a volutpat urna tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, nibh quis euismod tempor, risus metus dictum nisl, eu lobortis nisl felis ac elit. Morbi iaculis consectetur imperdiet. Morbi pharetra tortor interdum nibh vestibulum egestas. Aliquam tincidunt neque tellus, non vulputate ligula iaculis nec. Vestibulum dui quam, pulvinar ac ligula vitae, commodo sollicitudin tortor. Fusce quis neque ullamcorper est fringilla maximus. Cras laoreet commodo risus, nec feugiat quam ullamcorper id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 6, title: 'És még egy', content: 'Ez az utolsó...' }
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);