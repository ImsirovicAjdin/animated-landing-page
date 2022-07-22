import { ListItemLink } from "./ListItemLink";

const linkData = [
  {facebook: {
    icon: 'facebook',
    text: 'Facebook',
  }}, 
  {twitter: {
    icon: 'twitter',
    text: 'Twitter',
  }},
  {github: {
    icon: 'github',
    text: 'Github',
  }}
];

function ListItem() {
  return (
    <li className="flex items-center">
      {
        linkData.map((link, index) => {
          return(
            <ListItemLink key={index} iconType={link.icon} linkText="{link.text}" />
          )
        })
      }
    </li>
  )
}

export {ListItem}