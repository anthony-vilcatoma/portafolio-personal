import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, Smartphone, Shield, MessageSquare, Monitor,
  Activity, BarChart2, ShoppingBag, Users, Tv, X,
  ChevronRight, Image as ImageIcon
} from 'lucide-react';

const projects = [
  {
    id: 'opp',
    title: 'OPP – Oficina del Procurador del Paciente',
    category: '.NET Framework 4.8 / .NET 9',
    role: 'Desarrollador principal · Desde cero',
    desc: 'Sistema institucional compuesto por dos soluciones independientes: una aplicación web legacy en .NET Framework 4.8 con arquitectura en capas (Web, Negocio, Datos, Entidad, Job) y Angular 11; y una nueva API REST en .NET 9 orientada a la integración con aseguradoras, construida con EF Core 8 y Angular 16.',
    tags: ['.NET 9', '.NET Framework 4.8', 'Angular 16', 'EF Core 8', 'SQL Server', 'JWT', 'Active Directory', 'Azure Pipelines', 'Serilog', 'Dapper', 'AutoMapper', 'Swagger'],
    achievement: 'Desarrollado en su totalidad — frontend, backend, autenticación con Active Directory, jobs programados y pipelines de despliegue.',
    color: 'neon-cyan',
    icon: Code2,
    screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    extended: 'Sistema de doble capa diseñado para soportar la operativa institucional de la OPP. El sistema legacy mantiene la lógica de negocio histórica en .NET Framework 4.8 con autenticación integrada al Active Directory corporativo vía System.DirectoryServices. La nueva API (OPPAPI) en .NET 9 expone endpoints REST consumidos por aseguradoras externas, con EF Core 8, Dapper para consultas complejas y pipelines dedicados en Azure DevOps (OPP_MVC + OPP_Inspecciones). Todo el stack fue construido desde cero: diseño de base de datos, arquitectura en capas, frontend en Angular, autenticación AD y CI/CD.',
  },
  {
    id: 'wicq',
    title: 'Next / WicQ – Gestión de Turnos y Citas',
    category: '.NET 6 / AWS Chime SDK',
    role: 'Desarrollador · Upgrades de versiones + módulo videollamadas + CI/CD',
    desc: 'Sistema de gestión de citas y turnos para clínicas. Permite tomar turnos, recibir atención virtual y ser llamado desde pantallas en sala de espera. Migrado de .NET Framework 4.8 → .NET 6 y Angular 9 → Angular 20. Incluye módulo de videollamadas (TNVideoCall) con AWS Chime SDK, aplicación UWP para televisores (TvWin) y pipeline CI/CD multi-stage con backup automático por fecha/hora.',
    tags: ['.NET 6', 'Angular 20', 'AWS Chime SDK', 'UWP', 'Azure Pipelines', 'Twilio', 'MailKit', 'EF Core 6', 'Dapper', 'LDAP', 'Amazon CDK', '.NET Core 3.1'],
    achievement: 'Pipeline CI/CD multi-stage: Build (Angular + .NET) → Deploy a IIS con backup automático agrupado por fecha/hora.',
    color: 'neon-purple',
    icon: Monitor,
    screenshot: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    extended: 'Ecosistema compuesto por tres subcomponentes: WicQ (core del sistema de colas, migrado de .NET Framework 4.8 a .NET 6 y Angular 9 → 20), TNVideoCall (módulo de videollamadas para atención virtual con AWS Chime SDK en .NET Core 3.1 y Amazon CDK) y TvWin (aplicación UWP para televisores de sala de espera que muestra y anuncia turnos en tiempo real). El desarrollador construyó y configuró el pipeline CI/CD en Azure DevOps con etapas de Build separadas para Angular y .NET, seguidas de Deploy a IIS con backup automático nombrado por fecha y hora. Comunicaciones via Twilio (SMS/voz) y MailKit (email). Autenticación LDAP con LdapForNet.',
  },
  {
    id: 'ifence',
    title: 'IFence – Reconocimiento de Violencia con IA',
    category: '.NET 6/8 / AWS / PyTorch',
    role: 'Desarrollador · Participó en las 3 capas del sistema',
    desc: 'Sistema de seguridad que captura video en tiempo real desde cámaras, detecta rostros y situaciones de violencia usando modelos de IA entrenados con PyTorch (EfficientNetV2, ConvNeXt, ResNet101) y AWS Rekognition. Arquitectura híbrida: procesamiento on-premise en .NET, modelos IA en Python, infraestructura en AWS. Desplegado en Amazon Linux EC2 con Docker.',
    tags: ['.NET 8', '.NET 6', 'Angular 15', 'AWS Rekognition', 'AWS S3', 'AWS Lambda', 'PyTorch', 'Emgu.CV', 'Docker', 'App Insights', 'Serilog', 'Twilio'],
    achievement: 'Integración completa en las 3 capas: APIs .NET en EC2, modelos IA Python/PyTorch y servicios AWS (Rekognition, S3, Lambda).',
    color: 'neon-pink',
    icon: Shield,
    screenshot: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    extended: 'Sistema de múltiples capas orquestadas: la capa .NET (APIProcess, BackOffice, BusinessServer, OnPremisse, Transmisor) gestiona la captura de frames y su envío al API Python para inferencia. Los modelos IA (EfficientNetV2, ConvNeXt, Inception v3, MobileNet v3, ResNet101, Video Swin-T) fueron entrenados con PyTorch. El reconocimiento facial se implementó con Emgu.CV v4.10. La capa AWS usa Rekognition para detección adicional, S3 para almacenamiento de evidencias, STS para seguridad y Lambda para procesamiento serverless. El BackOffice en Angular 15 permite gestión y monitoreo. Desplegado con Docker Compose en Amazon Linux EC2. CI/CD vía Bitbucket Pipelines.',
  },
  {
    id: 'frutilina',
    title: 'Frutilina – Chatbot Inteligente WIC Puerto Rico',
    category: '.NET 8 / Azure OpenAI / Copilot Studio',
    role: 'Desarrollador · Mantenimiento y 3 versiones evolutivas',
    desc: 'Chatbot conversacional para el programa WIC (Women, Infants and Children) de Puerto Rico. Permite consultar elegibilidad, agendar citas, localizar centros cercanos y recibir orientación. Evolucionó de Microsoft Bot Framework con LUIS hasta Copilot Studio con Azure OpenAI GPT y búsqueda semántica RAG sobre documentos institucionales.',
    tags: ['.NET 8', 'Bot Framework 4.22', 'Azure OpenAI', 'Copilot Studio', 'Azure AI Language', 'Azure Functions', 'RAG', 'Azure Cognitive Search', 'Playwright', 'PuppeteerSharp', 'Azure Blob Storage', 'Dapper'],
    achievement: 'Migración a través de 3 versiones tecnológicas hasta RAG con Azure OpenAI en producción.',
    color: 'neon-cyan',
    icon: MessageSquare,
    screenshot: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
    extended: 'El chatbot pasó por tres generaciones tecnológicas: v1 (WIC_Chatbot) en .NET Core 3.1 con Bot Framework 4.14, LUIS y QnA Maker con diálogos adaptativos; v2 (WIC_Chatbot2) con Bot Framework 4.15 y AdaptiveExpressions; v3 actual (WIC.Frutilina) en .NET 8 con Bot Builder 4.22, Microsoft Copilot Studio, Azure AI Language Conversations, Azure OpenAI GPT y RAG sobre documentos institutcionales usando Azure Cognitive Search. Incluye automatización web headless con Playwright y PuppeteerSharp para consultas en portales externos, Azure Functions (.NET 6) para lógica serverless y almacenamiento en Azure Blob Storage, Queue y Files.',
  },
  {
    id: 'ases-mobile',
    title: 'ASES Mobile – App de Seguro de Salud',
    category: '.NET MAUI / Ocelot API Gateway',
    role: 'Desarrollador · App .NET MAUI + implementación del API Gateway',
    desc: 'Aplicación móvil oficial del seguro de salud ASES de Puerto Rico para 500,000+ beneficiarios. Migrada de Xamarin.Forms a .NET MAUI (Android, iOS, macCatalyst). Permite gestionar certificación, documentos, recertificación y tarjeta virtual del plan. API Gateway con Ocelot v16 y notificaciones push via Azure Notification Hubs y Firebase.',
    tags: ['.NET MAUI', 'Xamarin.Forms', 'Ocelot v16', 'Telerik UI MAUI', 'IdentityServer4', 'Azure Notification Hubs', 'Firebase FCM', 'AWS S3', 'EF Core 5', 'JWT', 'Azure Pipelines', 'AppCenter'],
    achievement: 'Migración completa Xamarin.Forms → .NET MAUI e implementación del API Gateway con Ocelot v16.',
    color: 'neon-purple',
    icon: Smartphone,
    screenshot: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    extended: 'La app mobile corre en Android, iOS y macCatalyst usando .NET MAUI net8.0. La UI está construida con Telerik UI for MAUI v6.8.0 y SkiaSharp. La versión previa usaba Xamarin.Forms 5.0 con Telerik UI for Xamarin v2020.3 y Prism 8.1. El API Gateway implementado con Ocelot v16 centraliza el enrutamiento hacia la API REST en .NET Core 3.1 (AsesMobileAPI) con EF Core 5 y AutoMapper. La autenticación se maneja con IdentityServer4 y IdentityModel.OidcClient. Push notifications con Azure Notification Hubs, Firebase (FCM) y AppCenter. Archivos en AWS S3. Azure DevOps gestiona 3 pipelines independientes: Android, Mensajería y principal.',
  },
  {
    id: 'ases-casos',
    title: 'ASES Casos – Case Management',
    category: '.NET 8 / Telerik Reporting',
    role: 'Desarrollador principal · Desde cero',
    desc: 'Sistema de gestión de casos para ASES Puerto Rico. Permite a empleados, consejeros y representantes administrar solicitudes, seguimientos y asignaciones de casos de beneficiarios. Incluye generación de reportes institucionales con Telerik Reporting, transferencia de archivos a AWS S3 e integración con Azure Identity.',
    tags: ['.NET 8', 'Angular 18', 'EF Core 9', 'Telerik Reporting v18', 'Ocelot v16', 'AWS S3', 'Azure Identity', 'SendGrid', 'log4net', 'Serilog', 'LightInject', 'AutoMapper'],
    achievement: 'Desarrollado desde cero — incluye diseño y desarrollo de todos los reportes Telerik (.trdp) institucionales.',
    color: 'neon-pink',
    icon: Activity,
    screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    extended: 'Sistema construido en .NET 8 (AsesComplaint) con un BackOffice legado en .NET Core 3.1 (MedicaidBackOffice). Frontend en Angular 18 para la app principal y Angular 9 para el BackOffice. El API Gateway usa Ocelot v16. EF Core 9 con AutoMapper y LightInject para inyección de dependencias. Los reportes Telerik Reporting v18.2.24.924 incluyen: Casos por fecha de vencimiento, Casos por representante y otros reportes institucionales, todos diseñados y desarrollados en .trdp. Almacenamiento de archivos en AWS S3 (AWSSDK.S3) y Google Cloud Storage. Autenticación con Azure Identity. Notificaciones por email con SendGrid. Logging dual: log4net y Serilog. CI/CD con Azure Pipelines.',
  },
  {
    id: 'smartmis',
    title: 'Comerciantes SMARTMIS – Gestión WIC PR',
    category: '.NET 6 / Angular / AdobeSign',
    role: 'Desarrollador · Integración y unificación de módulos',
    desc: 'Sistema de gestión para comerciantes y tiendas participantes del programa WIC Puerto Rico. El desarrollador realizó la integración de todos los módulos dispersos en una sola API unificada (NewMIS360API). Incluye generación de reportes en Excel y PDF, firma digital de contratos con AdobeSign y transferencia de archivos via SSH.NET.',
    tags: ['.NET 6', '.NET Core 3.1', 'Angular 22', 'Angular 16', 'EF Core 6', 'AdobeSign REST', 'SSH.NET', 'iText7', 'ClosedXML', 'SendGrid', 'Twilio', 'Docker', 'FluentValidation'],
    achievement: 'Unificación de todos los módulos dispersos en una sola API — NewMIS360API — con firma digital AdobeSign integrada.',
    color: 'neon-cyan',
    icon: ShoppingBag,
    screenshot: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    extended: 'El proyecto unificó WICSeleccionComerciantes (.NET Core 3.1) y el portal Angular 10 (WicPortal) en la nueva API NewMIS360API (.NET 6) con Angular 16 y BackOffice en Angular 22. Módulos desarrollados: selección y gestión de comerciantes, gestión de instalaciones WICPR, generación de reportes Excel (ClosedXML, EPPlus) y PDF (iText7, iTextSharp), notificaciones por email (SendGrid, MailKit) y SMS (Twilio), firma digital de contratos con AdobeSign REST, y transferencia de archivos a servidores externos con SSH.NET. Validaciones con FluentValidation. Docker Compose para entornos y Azure Pipelines multi-environment (QA + Producción).',
  },
  {
    id: 'consejeras',
    title: 'Consejeras Pares – App Vital ASES PR',
    category: '.NET Core 3.1 / Angular / PWA',
    role: 'Desarrollador · Mantenimiento y evolución',
    desc: 'Sistema para el programa de Consejeras Pares del programa App Vital de ASES Puerto Rico. Gestiona consejeras capacitadas que brindan apoyo a beneficiarias. Incluye PWA, aplicación web y múltiples APIs especializadas por rol: ConsejerasParesAPI, CounselorsAPI y ParticipantsAPI. Comunicaciones multicanal y generación de documentos con OpenXml.',
    tags: ['.NET Core 3.1', 'Angular 13 PWA', 'Angular 11', 'SQL Server', 'SQLite', 'Twilio', 'Sinch', 'SendGrid', 'MailKit', 'OpenXml', 'EF Core 3.1', 'Docker Compose', 'Azure Pipelines'],
    achievement: 'APIs diferenciadas por rol con comunicaciones multicanal (Twilio, Sinch, SendGrid) en producción.',
    color: 'neon-purple',
    icon: Users,
    screenshot: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    extended: 'Sistema con tres APIs independientes en .NET Core 3.1: ConsejerasParesAPI (gestión de consejeras), CounselorsAPI y ParticipantsAPI. Frontend dual: Angular 11 PWA para acceso móvil y Angular 13 para la web. Base de datos mixta: SQL Server para datos institucionales y SQLite para operación offline. Las comunicaciones multicanal incluyen SMS via Twilio y Sinch (alternativo), email con SendGrid y MailKit. Generación de documentos con DocumentFormat.OpenXml. Despliegue con Docker Compose y CI/CD con Azure Pipelines.',
  },
  {
    id: 'cavv',
    title: 'CAVV – Monitoreo de Violencia y Agresiones',
    category: '.NET Framework 4.x / WCF / SSRS',
    role: 'Desarrollador · Desarrollo y mantenimiento de ambos sistemas',
    desc: 'Sistema institucional para el monitoreo estadístico y seguimiento de casos de violencia y agresiones sexuales. Compuesto por dos aplicaciones: CAVV (.NET 4.6.1) con módulos de gestión y observatorio, y CavvMonitoreo (.NET 4.5.2) con servicios WCF y reportes SSRS diseñados por el desarrollador.',
    tags: ['.NET Framework 4.6', '.NET Framework 4.5', 'ASP.NET MVC', 'WCF', 'SSRS', 'EF 6', 'SQL Server', 'Azure Pipelines', 'jQuery', 'ReportViewer'],
    achievement: 'Diseño y desarrollo de todos los reportes SSRS para estadísticas institucionales de violencia.',
    color: 'neon-pink',
    icon: BarChart2,
    screenshot: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    extended: 'El sistema CAVV (.NET Framework 4.6.1) centraliza la gestión y el observatorio de casos. CavvMonitoreo (.NET 4.5.2) expone servicios internos vía WCF (Windows Communication Foundation) e integra SQL Server para todo el acceso a datos con Entity Framework 6. Los reportes SSRS (SQL Server Reporting Services) fueron diseñados y desarrollados completamente por el desarrollador: estadísticas de violencia por tipo y período, seguimiento de casos por estado, y otros reportes institucionales. Se usa Microsoft.ReportViewer.2012.Runtime v11.0 con ReportViewerForMvc. Frontend en ASP.NET MVC con jQuery. CI/CD con Azure Pipelines.',
  },
  {
    id: 'tvwin',
    title: 'TvWin – Pantalla de Turnos en Tiempo Real',
    category: 'UWP / .NET / SQL Server',
    role: 'Desarrollador · Módulo del ecosistema Next/WicQ',
    desc: 'Aplicación Universal Windows Platform (UWP) desplegada en televisores de sala de espera. Muestra y anuncia en tiempo real los turnos llamados, consumiendo el sistema Next/WicQ. Construida sobre .NETCore.UniversalWindowsPlatform con Entity Framework Core, Microsoft.Data.SqlClient y Serilog para logging.',
    tags: ['UWP', '.NETCore.UniversalWindowsPlatform', 'SQL Server', 'EF Core', 'Microsoft.Data.SqlClient', 'Serilog'],
    achievement: 'Módulo UWP especializado para visualización y anuncio en tiempo real de turnos en sala de espera.',
    color: 'neon-cyan',
    icon: Tv,
    screenshot: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=800&q=80',
    extended: 'Aplicación UWP diseñada para ejecutarse en televisores de sala de espera dentro del ecosistema Next/WicQ. Conecta a SQL Server vía Microsoft.Data.SqlClient y Entity Framework Core para obtener el estado de turnos en tiempo real. El sistema de logging usa Serilog para diagnóstico remoto. La app es parte integral del flujo de atención: cuando un operador llama un turno en WicQ, TvWin lo muestra y anuncia automáticamente en la pantalla del televisor.',
  },
];

const colorMap = {
  'neon-cyan': { border: 'border-neon-cyan/40', tag: 'border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan', icon: 'bg-neon-cyan/10 border-neon-cyan/20', text: 'text-neon-cyan', glow: 'hover:shadow-[0_0_40px_rgba(0,243,255,0.12)]' },
  'neon-purple': { border: 'border-neon-purple/40', tag: 'border-neon-purple/30 bg-neon-purple/10 text-neon-purple', icon: 'bg-neon-purple/10 border-neon-purple/20', text: 'text-neon-purple', glow: 'hover:shadow-[0_0_40px_rgba(189,0,255,0.12)]' },
  'neon-pink': { border: 'border-neon-pink/40', tag: 'border-neon-pink/30 bg-neon-pink/10 text-neon-pink', icon: 'bg-neon-pink/10 border-neon-pink/20', text: 'text-neon-pink', glow: 'hover:shadow-[0_0_40px_rgba(255,0,128,0.12)]' },
};

const ScreenshotPlaceholder = ({ icon: Icon, color, title }) => {
  const c = colorMap[color];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-[var(--bg-surface)]">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${c.icon} border`}>
        <Icon className={`w-8 h-8 ${c.text}`} />
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <ImageIcon className="w-3.5 h-3.5" />
        <span className="text-xs font-medium">Captura del proyecto</span>
      </div>
    </div>
  );
};

const Modal = ({ project, onClose }) => {
  if (!project) return null;
  const c = colorMap[project.color];
  const Icon = project.icon;

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={e => e.stopPropagation()}
          className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border ${c.border} bg-[var(--bg-surface)] shadow-2xl`}
        >
          {/* Screenshot area */}
          <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl">
            {project.screenshot
              ? <img src={project.screenshot} alt={project.title} className="w-full h-full object-cover" />
              : <ScreenshotPlaceholder icon={Icon} color={project.color} title={project.title} />
            }
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-transparent to-transparent" />
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-8 flex flex-col gap-6">
            <div>
              <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-3 ${c.tag}`}>
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">{project.title}</h3>
              <p className={`text-sm font-medium ${c.text}`}>{project.role}</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Descripción técnica</p>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{project.extended}</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Tecnologías</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className={`text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-lg border ${c.tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={`flex items-start gap-2 p-4 rounded-xl border ${c.border} bg-[var(--bg-card)]`}>
              <ChevronRight className={`w-4 h-4 mt-0.5 shrink-0 ${c.text}`} />
              <p className={`text-sm font-medium ${c.text}`}>{project.achievement}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, index, onOpen }) => {
  const c = colorMap[project.color];
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-60px' }}
      className="group flex flex-col"
    >
      <div
        className={`
          h-full flex flex-col rounded-2xl overflow-hidden
          border border-white/5 bg-[var(--bg-card)] backdrop-blur-xl
          hover:border-opacity-100 ${c.border} ${c.glow}
          transition-all duration-400 hover:-translate-y-1
        `}
      >
        {/* Screenshot / Placeholder */}
        <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-surface)] shrink-0">
          {project.screenshot
            ? (
              <img
                src={project.screenshot}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )
            : <ScreenshotPlaceholder icon={Icon} color={project.color} title={project.title} />
          }
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-[#07070f]/30 to-transparent" />

          {/* Category badge over image */}
          <div className="absolute bottom-3 left-3">
            <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${c.tag} backdrop-blur-md`}>
              {project.category}
            </span>
          </div>

          {/* Icon badge */}
          <div className="absolute top-3 right-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${c.icon} backdrop-blur-md`}>
              <Icon className={`w-4 h-4 ${c.text}`} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-5 flex-1">
          {/* Title + role */}
          <div>
            <h3 className={`text-sm font-bold text-[var(--text-primary)] leading-snug mb-1 group-hover:${c.text} transition-colors duration-300`}>
              {project.title}
            </h3>
            <p className="text-[11px] text-[var(--text-muted)] font-medium">{project.role}</p>
          </div>

          {/* Description */}
          <p className="text-[var(--text-secondary)] text-xs leading-relaxed font-light flex-1">
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 8).map(tag => (
              <span
                key={tag}
                className="text-[9px] font-semibold uppercase tracking-wide px-2 py-1 bg-[var(--bg-surface)] text-[var(--text-muted)] rounded-md border border-[var(--border-subtle)] group-hover:border-[var(--border-muted)] transition-colors"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 8 && (
              <span className="text-[9px] font-semibold px-2 py-1 text-gray-600">
                +{project.tags.length - 8}
              </span>
            )}
          </div>

          {/* Achievement + CTA */}
          <div className={`flex items-start justify-between gap-3 pt-3 border-t border-white/5`}>
            <p className={`text-[11px] font-medium ${c.text} leading-snug flex-1`}>
              ↳ {project.achievement}
            </p>
            <button
              onClick={() => onOpen(project)}
              className={`shrink-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border ${c.tag} transition-all duration-200 hover:brightness-125 whitespace-nowrap`}
            >
              Ver detalle
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectGrid = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="proyectos" className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-cyan font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
              Sapiens Consulting · 2024 – Presente
            </span>
            <h2 className="text-5xl md:text-6xl font-title font-bold text-[var(--text-primary)]">
              Proyectos <span className="text-gradient-neon">Enterprise</span>
            </h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-lg font-light leading-relaxed">
              10 sistemas en producción abarcando .NET Framework 4.x → .NET 9, .NET MAUI, AWS, Azure OpenAI y CI/CD con Azure Pipelines.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 justify-start md:justify-end max-w-xs"
          >
            {['.NET 6/8/9', '.NET MAUI', 'Azure OpenAI', 'AWS', 'Angular', 'Azure DevOps'].map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeProject && (
        <Modal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
};

export default ProjectGrid;
