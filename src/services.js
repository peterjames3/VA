import { MdOutlineSupportAgent } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { TbWorldDownload } from "react-icons/tb";
import { FaKeyboard } from "react-icons/fa"; // Import an appropriate icon for data entry

export const services = [
    {
        id: 1,
        icon: MdOutlineSupportAgent, // Store the component, not the JSX
        title: "Administrative Support",
        description:
            "Organizing emails, managing calendars, data entry, and file management to streamline your daily tasks.",
    },
    {
        id: 2,
        icon: RiCustomerServiceFill, // Store the component, not the JSX
        title: "Customer Service",
        description:
            "Handling customer inquiries, order processing, and ensuring customer satisfaction through timely responses and follow-ups.",
    },
    {
        id: 3,
        icon: TbWorldDownload, // Store the component, not the JSX
        title: "Social Media Management",
        description:
            "Creating content, scheduling posts, and engaging with followers to help you grow and maintain a strong online presence.",
    },
    {
        id: 4,
        icon: FaKeyboard, // Icon for data entry and organization
        title: "Data Entry and Organization",
        description:
            "Efficient data entry, organization of databases, and maintaining accurate records to improve business operations.",
    },
];
