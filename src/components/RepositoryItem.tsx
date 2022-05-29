interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <div className="left">
        <img
          src="https://github.com/lukaswyver.png"
          style={{ borderRadius: "8px" }}
        />
        <div className="">
          <strong>{props.repository.name}</strong>
          <p>
            {props.repository.description ??
              "Clique neset repositorio para saber mais..."}
          </p>
        </div>
      </div>

      <div className="right">
        <a href={props.repository.html_url}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 18.105L26.5017 25L20 31.895L21.7492 33.75L30 25L21.7492 16.25L20 18.105Z"
              fill="#C9C9D4"
            />
          </svg>
        </a>
      </div>
    </li>
  );
}
