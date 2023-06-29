import { useId } from "preact/hooks";
import type { AlertLink } from "./Header.tsx";
interface Props {
  alerts: AlertLink[];
}

function Alert({ alerts }: Props) {
  const id = useId();
  return (
    <div id={id} class={"bg-primary"}>
      <div class="container">
        {alerts.map((alert, index) => (
          <div key={index} class="grid grid-cols-2 py-1">
            <span class="text-sm" key={index}>{alert.description}</span>
            <ul class="flex justify-between align-middle">
              {alert.children?.map((child, index) => (
                <li class="text-sm" key={index}>
                  <a class="hover:underline" href={child.href}>{child.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alert;
