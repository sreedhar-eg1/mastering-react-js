import { useNavigate } from 'react-router-dom';
import classes from './Post.module.css'

export default function Post({author, body, id}) {
  const navigate = useNavigate()

  return (
    <li className={classes.post} onClick={() => navigate(id)}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
}
