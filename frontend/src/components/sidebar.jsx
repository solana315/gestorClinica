import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


export default function Sidebar() {
const items = [
  { icon: <DashboardIcon />, label: 'Dashboard' },
  { icon: <PeopleIcon />, label: 'Gerir Pacientes' },
  { icon: <EventIcon />, label: 'Consultas' },
  { icon: <EditCalendarIcon />, label: 'Editar Agenda' },
  { icon: <SettingsIcon />, label: 'Alteração de Dados' },
  { icon: <AdminPanelSettingsIcon />, label: 'Administradores' },
  { icon: <HelpOutlineIcon />, label: 'Help' },
];


  return (
    <div>
      {items.map(([icon, label]) => (
        <div key={label} style={{ display: 'flex', gap: 8 }}>
          {icon}
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
//newbranchcommits