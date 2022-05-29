import { useState } from "react";
import { RepositoryList } from "../components/RepositoryList";
import { SearchInput } from "../components/SearchInput";
import "../styles/home.scss";

export function Home() {
  let user = "";

  const handleSearch = (searchValue: string) => {
    user = searchValue;
    console.log(user);
  };

  return (
    <div className="container">
      <nav>
        <div className="logo">
          <svg
            width="215"
            height="32"
            viewBox="0 0 215 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.5742 11.3203H60.1406V23.6484C60.1406 24.7891 59.8984 25.7578 59.4141 26.5547C58.9297 27.3516 58.2539 27.957 57.3867 28.3711C56.5195 28.793 55.5156 29.0039 54.375 29.0039C53.8906 29.0039 53.3516 28.9336 52.7578 28.793C52.1719 28.6523 51.6016 28.4258 51.0469 28.1133C50.5 27.8086 50.043 27.4062 49.6758 26.9062L51 25.2422C51.4531 25.7812 51.9531 26.1758 52.5 26.4258C53.0469 26.6758 53.6211 26.8008 54.2227 26.8008C54.8711 26.8008 55.4219 26.6797 55.875 26.4375C56.3359 26.2031 56.6914 25.8555 56.9414 25.3945C57.1914 24.9336 57.3164 24.3711 57.3164 23.707V14.1914L57.5742 11.3203ZM48.9609 17.8008V17.5547C48.9609 16.5938 49.0781 15.7188 49.3125 14.9297C49.5469 14.1328 49.8828 13.4492 50.3203 12.8789C50.7578 12.3008 51.2891 11.8594 51.9141 11.5547C52.5391 11.2422 53.2461 11.0859 54.0352 11.0859C54.8555 11.0859 55.5547 11.2344 56.1328 11.5312C56.7188 11.8281 57.207 12.2539 57.5977 12.8086C57.9883 13.3555 58.293 14.0117 58.5117 14.7773C58.7383 15.5352 58.9062 16.3789 59.0156 17.3086V18.0938C58.9141 19 58.7422 19.8281 58.5 20.5781C58.2578 21.3281 57.9375 21.9766 57.5391 22.5234C57.1406 23.0703 56.6484 23.4922 56.0625 23.7891C55.4844 24.0859 54.8008 24.2344 54.0117 24.2344C53.2383 24.2344 52.5391 24.0742 51.9141 23.7539C51.2969 23.4336 50.7656 22.9844 50.3203 22.4062C49.8828 21.8281 49.5469 21.1484 49.3125 20.3672C49.0781 19.5781 48.9609 18.7227 48.9609 17.8008ZM51.7852 17.5547V17.8008C51.7852 18.3789 51.8398 18.918 51.9492 19.418C52.0664 19.918 52.2422 20.3594 52.4766 20.7422C52.7188 21.1172 53.0234 21.4141 53.3906 21.6328C53.7656 21.8438 54.207 21.9492 54.7148 21.9492C55.3789 21.9492 55.9219 21.8086 56.3438 21.5273C56.7734 21.2461 57.1016 20.8672 57.3281 20.3906C57.5625 19.9062 57.7266 19.3672 57.8203 18.7734V16.6523C57.7734 16.1914 57.6758 15.7617 57.5273 15.3633C57.3867 14.9648 57.1953 14.6172 56.9531 14.3203C56.7109 14.0156 56.4062 13.7812 56.0391 13.6172C55.6719 13.4453 55.2383 13.3594 54.7383 13.3594C54.2305 13.3594 53.7891 13.4688 53.4141 13.6875C53.0391 13.9062 52.7305 14.207 52.4883 14.5898C52.2539 14.9727 52.0781 15.418 51.9609 15.9258C51.8438 16.4336 51.7852 16.9766 51.7852 17.5547ZM66.0938 11.3203V24H63.2578V11.3203H66.0938ZM63.0703 7.99219C63.0703 7.5625 63.2109 7.20703 63.4922 6.92578C63.7812 6.63672 64.1797 6.49219 64.6875 6.49219C65.1875 6.49219 65.582 6.63672 65.8711 6.92578C66.1602 7.20703 66.3047 7.5625 66.3047 7.99219C66.3047 8.41406 66.1602 8.76562 65.8711 9.04688C65.582 9.32812 65.1875 9.46875 64.6875 9.46875C64.1797 9.46875 63.7812 9.32812 63.4922 9.04688C63.2109 8.76562 63.0703 8.41406 63.0703 7.99219ZM75 11.3203V13.3828H67.8516V11.3203H75ZM69.9141 8.21484H72.7383V20.4961C72.7383 20.8867 72.793 21.1875 72.9023 21.3984C73.0195 21.6016 73.1797 21.7383 73.3828 21.8086C73.5859 21.8789 73.8242 21.9141 74.0977 21.9141C74.293 21.9141 74.4805 21.9023 74.6602 21.8789C74.8398 21.8555 74.9844 21.832 75.0938 21.8086L75.1055 23.9648C74.8711 24.0352 74.5977 24.0977 74.2852 24.1523C73.9805 24.207 73.6289 24.2344 73.2305 24.2344C72.582 24.2344 72.0078 24.1211 71.5078 23.8945C71.0078 23.6602 70.6172 23.2812 70.3359 22.7578C70.0547 22.2344 69.9141 21.5391 69.9141 20.6719V8.21484ZM79.9688 6V24H77.1562V6H79.9688ZM79.4766 17.1914L78.5625 17.1797C78.5703 16.3047 78.6914 15.4961 78.9258 14.7539C79.168 14.0117 79.5039 13.3672 79.9336 12.8203C80.3711 12.2656 80.8945 11.8398 81.5039 11.543C82.1133 11.2383 82.7891 11.0859 83.5312 11.0859C84.1562 11.0859 84.7188 11.1719 85.2188 11.3438C85.7266 11.5156 86.1641 11.793 86.5312 12.1758C86.8984 12.5508 87.1758 13.043 87.3633 13.6523C87.5586 14.2539 87.6562 14.9883 87.6562 15.8555V24H84.8203V15.832C84.8203 15.2227 84.7305 14.7383 84.5508 14.3789C84.3789 14.0195 84.125 13.7617 83.7891 13.6055C83.4531 13.4414 83.043 13.3594 82.5586 13.3594C82.0508 13.3594 81.6016 13.4609 81.2109 13.6641C80.8281 13.8672 80.5078 14.1445 80.25 14.4961C79.9922 14.8477 79.7969 15.2539 79.6641 15.7148C79.5391 16.1758 79.4766 16.668 79.4766 17.1914ZM98.1445 21.0117V11.3203H100.98V24H98.3086L98.1445 21.0117ZM98.543 18.375L99.4922 18.3516C99.4922 19.2031 99.3984 19.9883 99.2109 20.707C99.0234 21.418 98.7344 22.0391 98.3438 22.5703C97.9531 23.0938 97.4531 23.5039 96.8438 23.8008C96.2344 24.0898 95.5039 24.2344 94.6523 24.2344C94.0352 24.2344 93.4688 24.1445 92.9531 23.9648C92.4375 23.7852 91.9922 23.5078 91.6172 23.1328C91.25 22.7578 90.9648 22.2695 90.7617 21.668C90.5586 21.0664 90.457 20.3477 90.457 19.5117V11.3203H93.2812V19.5352C93.2812 19.9961 93.3359 20.3828 93.4453 20.6953C93.5547 21 93.7031 21.2461 93.8906 21.4336C94.0781 21.6211 94.2969 21.7539 94.5469 21.832C94.7969 21.9102 95.0625 21.9492 95.3438 21.9492C96.1484 21.9492 96.7812 21.793 97.2422 21.4805C97.7109 21.1602 98.043 20.7305 98.2383 20.1914C98.4414 19.6523 98.543 19.0469 98.543 18.375ZM103.887 6H106.711V21.293L106.441 24H103.887V6ZM114.984 17.543V17.7891C114.984 18.7266 114.879 19.5898 114.668 20.3789C114.465 21.1602 114.152 21.8398 113.73 22.418C113.316 22.9961 112.801 23.4453 112.184 23.7656C111.574 24.0781 110.867 24.2344 110.062 24.2344C109.273 24.2344 108.586 24.0859 108 23.7891C107.414 23.4922 106.922 23.0703 106.523 22.5234C106.133 21.9766 105.816 21.3242 105.574 20.5664C105.332 19.8086 105.16 18.9727 105.059 18.0586V17.2734C105.16 16.3516 105.332 15.5156 105.574 14.7656C105.816 14.0078 106.133 13.3555 106.523 12.8086C106.922 12.2539 107.41 11.8281 107.988 11.5312C108.574 11.2344 109.258 11.0859 110.039 11.0859C110.852 11.0859 111.566 11.2422 112.184 11.5547C112.809 11.8672 113.328 12.3125 113.742 12.8906C114.156 13.4609 114.465 14.1406 114.668 14.9297C114.879 15.7188 114.984 16.5898 114.984 17.543ZM112.16 17.7891V17.543C112.16 16.9727 112.113 16.4375 112.02 15.9375C111.926 15.4297 111.77 14.9844 111.551 14.6016C111.34 14.2188 111.051 13.918 110.684 13.6992C110.324 13.4727 109.875 13.3594 109.336 13.3594C108.836 13.3594 108.406 13.4453 108.047 13.6172C107.688 13.7891 107.387 14.0234 107.145 14.3203C106.902 14.6172 106.711 14.9609 106.57 15.3516C106.438 15.7422 106.348 16.1641 106.301 16.6172V18.7383C106.371 19.3242 106.52 19.8633 106.746 20.3555C106.98 20.8398 107.309 21.2305 107.73 21.5273C108.152 21.8164 108.695 21.9609 109.359 21.9609C109.883 21.9609 110.324 21.8555 110.684 21.6445C111.043 21.4336 111.328 21.1406 111.539 20.7656C111.758 20.3828 111.914 19.9375 112.008 19.4297C112.109 18.9219 112.16 18.375 112.16 17.7891Z"
              fill="#737380"
            />
            <path
              d="M126.633 24V26.2031H115.945V24H126.633ZM133.723 24.2344C132.785 24.2344 131.938 24.082 131.18 23.7773C130.43 23.4648 129.789 23.0312 129.258 22.4766C128.734 21.9219 128.332 21.2695 128.051 20.5195C127.77 19.7695 127.629 18.9609 127.629 18.0938V17.625C127.629 16.6328 127.773 15.7344 128.062 14.9297C128.352 14.125 128.754 13.4375 129.27 12.8672C129.785 12.2891 130.395 11.8477 131.098 11.543C131.801 11.2383 132.562 11.0859 133.383 11.0859C134.289 11.0859 135.082 11.2383 135.762 11.543C136.441 11.8477 137.004 12.2773 137.449 12.832C137.902 13.3789 138.238 14.0312 138.457 14.7891C138.684 15.5469 138.797 16.3828 138.797 17.2969V18.5039H129V16.4766H136.008V16.2539C135.992 15.7461 135.891 15.2695 135.703 14.8242C135.523 14.3789 135.246 14.0195 134.871 13.7461C134.496 13.4727 133.996 13.3359 133.371 13.3359C132.902 13.3359 132.484 13.4375 132.117 13.6406C131.758 13.8359 131.457 14.1211 131.215 14.4961C130.973 14.8711 130.785 15.3242 130.652 15.8555C130.527 16.3789 130.465 16.9688 130.465 17.625V18.0938C130.465 18.6484 130.539 19.1641 130.688 19.6406C130.844 20.1094 131.07 20.5195 131.367 20.8711C131.664 21.2227 132.023 21.5 132.445 21.7031C132.867 21.8984 133.348 21.9961 133.887 21.9961C134.566 21.9961 135.172 21.8594 135.703 21.5859C136.234 21.3125 136.695 20.9258 137.086 20.4258L138.574 21.8672C138.301 22.2656 137.945 22.6484 137.508 23.0156C137.07 23.375 136.535 23.668 135.902 23.8945C135.277 24.1211 134.551 24.2344 133.723 24.2344ZM143.156 11.3203L145.57 15.5273L148.031 11.3203H151.137L147.293 17.543L151.289 24H148.184L145.605 19.6172L143.027 24H139.91L143.895 17.543L140.062 11.3203H143.156ZM155.906 13.7578V28.875H153.082V11.3203H155.684L155.906 13.7578ZM164.168 17.543V17.7891C164.168 18.7109 164.059 19.5664 163.84 20.3555C163.629 21.1367 163.312 21.8203 162.891 22.4062C162.477 22.9844 161.965 23.4336 161.355 23.7539C160.746 24.0742 160.043 24.2344 159.246 24.2344C158.457 24.2344 157.766 24.0898 157.172 23.8008C156.586 23.5039 156.09 23.0859 155.684 22.5469C155.277 22.0078 154.949 21.375 154.699 20.6484C154.457 19.9141 154.285 19.1094 154.184 18.2344V17.2852C154.285 16.3555 154.457 15.5117 154.699 14.7539C154.949 13.9961 155.277 13.3438 155.684 12.7969C156.09 12.25 156.586 11.8281 157.172 11.5312C157.758 11.2344 158.441 11.0859 159.223 11.0859C160.02 11.0859 160.727 11.2422 161.344 11.5547C161.961 11.8594 162.48 12.2969 162.902 12.8672C163.324 13.4297 163.641 14.1094 163.852 14.9062C164.062 15.6953 164.168 16.5742 164.168 17.543ZM161.344 17.7891V17.543C161.344 16.957 161.289 16.4141 161.18 15.9141C161.07 15.4062 160.898 14.9609 160.664 14.5781C160.43 14.1953 160.129 13.8984 159.762 13.6875C159.402 13.4688 158.969 13.3594 158.461 13.3594C157.961 13.3594 157.531 13.4453 157.172 13.6172C156.812 13.7812 156.512 14.0117 156.27 14.3086C156.027 14.6055 155.84 14.9531 155.707 15.3516C155.574 15.7422 155.48 16.168 155.426 16.6289V18.9023C155.52 19.4648 155.68 19.9805 155.906 20.4492C156.133 20.918 156.453 21.293 156.867 21.5742C157.289 21.8477 157.828 21.9844 158.484 21.9844C158.992 21.9844 159.426 21.875 159.785 21.6562C160.145 21.4375 160.438 21.1367 160.664 20.7539C160.898 20.3633 161.07 19.9141 161.18 19.4062C161.289 18.8984 161.344 18.3594 161.344 17.7891ZM169.594 6V24H166.758V6H169.594ZM172.148 17.8008V17.5312C172.148 16.6172 172.281 15.7695 172.547 14.9883C172.812 14.1992 173.195 13.5156 173.695 12.9375C174.203 12.3516 174.82 11.8984 175.547 11.5781C176.281 11.25 177.109 11.0859 178.031 11.0859C178.961 11.0859 179.789 11.25 180.516 11.5781C181.25 11.8984 181.871 12.3516 182.379 12.9375C182.887 13.5156 183.273 14.1992 183.539 14.9883C183.805 15.7695 183.938 16.6172 183.938 17.5312V17.8008C183.938 18.7148 183.805 19.5625 183.539 20.3438C183.273 21.125 182.887 21.8086 182.379 22.3945C181.871 22.9727 181.254 23.4258 180.527 23.7539C179.801 24.0742 178.977 24.2344 178.055 24.2344C177.125 24.2344 176.293 24.0742 175.559 23.7539C174.832 23.4258 174.215 22.9727 173.707 22.3945C173.199 21.8086 172.812 21.125 172.547 20.3438C172.281 19.5625 172.148 18.7148 172.148 17.8008ZM174.973 17.5312V17.8008C174.973 18.3711 175.031 18.9102 175.148 19.418C175.266 19.9258 175.449 20.3711 175.699 20.7539C175.949 21.1367 176.27 21.4375 176.66 21.6562C177.051 21.875 177.516 21.9844 178.055 21.9844C178.578 21.9844 179.031 21.875 179.414 21.6562C179.805 21.4375 180.125 21.1367 180.375 20.7539C180.625 20.3711 180.809 19.9258 180.926 19.418C181.051 18.9102 181.113 18.3711 181.113 17.8008V17.5312C181.113 16.9688 181.051 16.4375 180.926 15.9375C180.809 15.4297 180.621 14.9805 180.363 14.5898C180.113 14.1992 179.793 13.8945 179.402 13.6758C179.02 13.4492 178.562 13.3359 178.031 13.3359C177.5 13.3359 177.039 13.4492 176.648 13.6758C176.266 13.8945 175.949 14.1992 175.699 14.5898C175.449 14.9805 175.266 15.4297 175.148 15.9375C175.031 16.4375 174.973 16.9688 174.973 17.5312ZM189.141 13.7344V24H186.316V11.3203H189.012L189.141 13.7344ZM193.02 11.2383L192.996 13.8633C192.824 13.832 192.637 13.8086 192.434 13.793C192.238 13.7773 192.043 13.7695 191.848 13.7695C191.363 13.7695 190.938 13.8398 190.57 13.9805C190.203 14.1133 189.895 14.3086 189.645 14.5664C189.402 14.8164 189.215 15.1211 189.082 15.4805C188.949 15.8398 188.871 16.2422 188.848 16.6875L188.203 16.7344C188.203 15.9375 188.281 15.1992 188.438 14.5195C188.594 13.8398 188.828 13.2422 189.141 12.7266C189.461 12.2109 189.859 11.8086 190.336 11.5195C190.82 11.2305 191.379 11.0859 192.012 11.0859C192.184 11.0859 192.367 11.1016 192.562 11.1328C192.766 11.1641 192.918 11.1992 193.02 11.2383ZM200.145 24.2344C199.207 24.2344 198.359 24.082 197.602 23.7773C196.852 23.4648 196.211 23.0312 195.68 22.4766C195.156 21.9219 194.754 21.2695 194.473 20.5195C194.191 19.7695 194.051 18.9609 194.051 18.0938V17.625C194.051 16.6328 194.195 15.7344 194.484 14.9297C194.773 14.125 195.176 13.4375 195.691 12.8672C196.207 12.2891 196.816 11.8477 197.52 11.543C198.223 11.2383 198.984 11.0859 199.805 11.0859C200.711 11.0859 201.504 11.2383 202.184 11.543C202.863 11.8477 203.426 12.2773 203.871 12.832C204.324 13.3789 204.66 14.0312 204.879 14.7891C205.105 15.5469 205.219 16.3828 205.219 17.2969V18.5039H195.422V16.4766H202.43V16.2539C202.414 15.7461 202.312 15.2695 202.125 14.8242C201.945 14.3789 201.668 14.0195 201.293 13.7461C200.918 13.4727 200.418 13.3359 199.793 13.3359C199.324 13.3359 198.906 13.4375 198.539 13.6406C198.18 13.8359 197.879 14.1211 197.637 14.4961C197.395 14.8711 197.207 15.3242 197.074 15.8555C196.949 16.3789 196.887 16.9688 196.887 17.625V18.0938C196.887 18.6484 196.961 19.1641 197.109 19.6406C197.266 20.1094 197.492 20.5195 197.789 20.8711C198.086 21.2227 198.445 21.5 198.867 21.7031C199.289 21.8984 199.77 21.9961 200.309 21.9961C200.988 21.9961 201.594 21.8594 202.125 21.5859C202.656 21.3125 203.117 20.9258 203.508 20.4258L204.996 21.8672C204.723 22.2656 204.367 22.6484 203.93 23.0156C203.492 23.375 202.957 23.668 202.324 23.8945C201.699 24.1211 200.973 24.2344 200.145 24.2344ZM210.258 13.7344V24H207.434V11.3203H210.129L210.258 13.7344ZM214.137 11.2383L214.113 13.8633C213.941 13.832 213.754 13.8086 213.551 13.793C213.355 13.7773 213.16 13.7695 212.965 13.7695C212.48 13.7695 212.055 13.8398 211.688 13.9805C211.32 14.1133 211.012 14.3086 210.762 14.5664C210.52 14.8164 210.332 15.1211 210.199 15.4805C210.066 15.8398 209.988 16.2422 209.965 16.6875L209.32 16.7344C209.32 15.9375 209.398 15.1992 209.555 14.5195C209.711 13.8398 209.945 13.2422 210.258 12.7266C210.578 12.2109 210.977 11.8086 211.453 11.5195C211.938 11.2305 212.496 11.0859 213.129 11.0859C213.301 11.0859 213.484 11.1016 213.68 11.1328C213.883 11.1641 214.035 11.1992 214.137 11.2383Z"
              fill="#A8A8B3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.16002 7.16002 0 16 0C24.84 0 32 7.16002 31.9999 16C31.9999 24.832 24.8399 31.9999 16 31.9999C7.16002 31.9999 0 24.832 0 16ZM6.39997 25.6L19.504 19.504L25.6 6.39997L12.496 12.496L6.39997 25.6ZM17.76 16C17.76 16.968 16.9759 17.76 16 17.76C15.032 17.76 14.2399 16.968 14.2399 16C14.2399 15.0319 15.0319 14.2399 16 14.2399C16.976 14.2399 17.76 15.0319 17.76 16Z"
              fill="#121214"
            />
          </svg>
        </div>
      </nav>

      <div className="logoGitHub">
        <svg
          width="688"
          height="648"
          viewBox="0 0 688 648"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.05" clip-path="url(#clip0_1_374)">
            <path
              d="M344 -25.6667C153.94 -25.6667 0 125.693 0 312.371C0 461.753 98.556 588.43 235.21 633.093C252.41 636.275 258.717 625.812 258.717 616.839C258.717 608.813 258.43 587.542 258.287 559.363C162.597 579.745 142.416 514.012 142.416 514.012C126.764 474.997 104.146 464.562 104.146 464.562C72.9853 443.607 106.554 444.037 106.554 444.037C141.097 446.387 159.243 478.867 159.243 478.867C189.917 530.553 239.768 515.617 259.433 506.989C262.529 485.116 271.387 470.238 281.22 461.781C204.823 453.325 124.528 424.257 124.528 294.741C124.528 257.847 137.858 227.689 159.931 204.039C156.061 195.497 144.451 161.125 162.941 114.571C162.941 114.571 191.751 105.512 257.541 149.229C285.061 141.718 314.301 137.991 343.541 137.819C372.781 137.991 402.021 141.718 429.541 149.229C494.901 105.512 523.711 114.571 523.711 114.571C542.201 161.125 530.591 195.497 527.151 204.039C549.081 227.689 562.411 257.847 562.411 294.741C562.411 424.601 482.001 453.181 405.461 461.495C417.501 471.643 428.681 492.369 428.681 524.045C428.681 569.281 428.251 605.631 428.251 616.61C428.251 625.468 434.271 636.046 451.901 632.663C589.53 588.287 688 461.523 688 312.371C688 125.693 533.974 -25.6667 344 -25.6667V-25.6667Z"
              fill="url(#paint0_linear_1_374)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_374"
              x1="344"
              y1="-25.6667"
              x2="344"
              y2="633.676"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#121214" />
              <stop offset="1" stop-color="#121214" stop-opacity="0" />
            </linearGradient>
            <clipPath id="clip0_1_374">
              <rect
                width="688"
                height="688"
                fill="white"
                transform="translate(0 -40)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <header>
        <h1>Explore repositórios no Github.</h1>
        <SearchInput onSearch={handleSearch} />
      </header>

      <RepositoryList />
    </div>
  );
}