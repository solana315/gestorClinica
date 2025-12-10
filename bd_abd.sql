--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-12-10 14:45:39

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 239 (class 1255 OID 139403)
-- Name: delete_multiple_appointments(integer[]); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.delete_multiple_appointments(IN ids integer[])
    LANGUAGE plpgsql
    AS $$
BEGIN
    DELETE FROM appointments
    WHERE id = ANY(ids);
END;
$$;


ALTER PROCEDURE public.delete_multiple_appointments(IN ids integer[]) OWNER TO postgres;

--
-- TOC entry 240 (class 1255 OID 139411)
-- Name: inserir_3_medicos(character varying, character varying, character varying, character varying, character varying, character varying); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.inserir_3_medicos(IN p_nome1 character varying, IN p_especialidade1 character varying, IN p_nome2 character varying, IN p_especialidade2 character varying, IN p_nome3 character varying, IN p_especialidade3 character varying)
    LANGUAGE plpgsql
    AS $$
BEGIN
    INSERT INTO medico (nome, especialidade)
    VALUES (p_nome1, p_especialidade1);

    INSERT INTO medico (nome, especialidade)
    VALUES (p_nome2, p_especialidade2);

    INSERT INTO medico (nome, especialidade)
    VALUES (p_nome3, p_especialidade3);

    RAISE NOTICE '3 médicos inseridos com sucesso.';
END;
$$;


ALTER PROCEDURE public.inserir_3_medicos(IN p_nome1 character varying, IN p_especialidade1 character varying, IN p_nome2 character varying, IN p_especialidade2 character varying, IN p_nome3 character varying, IN p_especialidade3 character varying) OWNER TO postgres;

--
-- TOC entry 242 (class 1255 OID 139417)
-- Name: inserir_tratamento(date, date, text, integer, integer, integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.inserir_tratamento(p_data_inicio date, p_data_fim date, p_descricao text, p_status integer, p_id integer, p_id_tratamento integer DEFAULT NULL::integer) RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  IF p_id_tratamento IS NULL THEN
    INSERT INTO plano_tratamento (id_tratamento, data_inicio, data_fim, descricao, status, id)
    VALUES (nextval('seq_tratamento'), p_data_inicio, p_data_fim, p_descricao, p_status, p_id);
  ELSE
    INSERT INTO plano_tratamento (id_tratamento, data_inicio, data_fim, descricao, status, id)
    VALUES (p_id_tratamento, p_data_inicio, p_data_fim, p_descricao, p_status, p_id);
  END IF;
END;
$$;


ALTER FUNCTION public.inserir_tratamento(p_data_inicio date, p_data_fim date, p_descricao text, p_status integer, p_id integer, p_id_tratamento integer) OWNER TO postgres;

--
-- TOC entry 243 (class 1255 OID 139418)
-- Name: inserir_tratamento(integer, date, date, text, character varying, integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.inserir_tratamento(p_paciente_id integer, p_data_inicio date, p_data_fim date, p_descricao text, p_status character varying, p_id_tratamento integer DEFAULT NULL::integer) RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  IF p_id_tratamento IS NULL THEN
    INSERT INTO plano_tratamento (id_tratamento, paciente_id, data_inicio, data_fim, descricao, status)
    VALUES (nextval('seq_tratamento'), p_paciente_id, p_data_inicio, p_data_fim, p_descricao, p_status);
  ELSE
    INSERT INTO plano_tratamento (id_tratamento, paciente_id, data_inicio, data_fim, descricao, status)
    VALUES (p_id_tratamento, p_paciente_id, p_data_inicio, p_data_fim, p_descricao, p_status);
  END IF;
END;
$$;


ALTER FUNCTION public.inserir_tratamento(p_paciente_id integer, p_data_inicio date, p_data_fim date, p_descricao text, p_status character varying, p_id_tratamento integer) OWNER TO postgres;

--
-- TOC entry 241 (class 1255 OID 139412)
-- Name: sincroniza_ids_utilizador(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.sincroniza_ids_utilizador() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    -- Se id mudou, replica em id_paciente
    IF NEW.id IS DISTINCT FROM OLD.id THEN
        NEW.id_paciente := NEW.id;
    END IF;

    -- Se id_paciente mudou, replica em id
    IF NEW.id_paciente IS DISTINCT FROM OLD.id_paciente THEN
        NEW.id := NEW.id_paciente;
    END IF;

    RETURN NEW;
END;
$$;


ALTER FUNCTION public.sincroniza_ids_utilizador() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 232 (class 1259 OID 123139)
-- Name: consentimento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.consentimento (
    id integer NOT NULL,
    paciente_id integer,
    tipo character varying(100),
    data_consentimento date,
    valido_ate date,
    revogado boolean
);


ALTER TABLE public.consentimento OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 123138)
-- Name: consentimento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.consentimento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.consentimento_id_seq OWNER TO postgres;

--
-- TOC entry 4949 (class 0 OID 0)
-- Dependencies: 231
-- Name: consentimento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.consentimento_id_seq OWNED BY public.consentimento.id;


--
-- TOC entry 224 (class 1259 OID 123061)
-- Name: consulta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.consulta (
    id_consulta integer NOT NULL,
    id_medico integer,
    duracao integer,
    tipo_de_marcacao character varying(50),
    status character varying(50),
    data_consulta date NOT NULL,
    id integer,
    hora time without time zone NOT NULL
);


ALTER TABLE public.consulta OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 123060)
-- Name: consulta_id_consulta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.consulta_id_consulta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.consulta_id_consulta_seq OWNER TO postgres;

--
-- TOC entry 4950 (class 0 OID 0)
-- Dependencies: 223
-- Name: consulta_id_consulta_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.consulta_id_consulta_seq OWNED BY public.consulta.id_consulta;


--
-- TOC entry 236 (class 1259 OID 123158)
-- Name: declaracao_presenca; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.declaracao_presenca (
    id_declaracao integer NOT NULL,
    consulta_id integer,
    data_emissao date,
    observacoes text
);


ALTER TABLE public.declaracao_presenca OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 123157)
-- Name: declaracao_presenca_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.declaracao_presenca_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.declaracao_presenca_id_seq OWNER TO postgres;

--
-- TOC entry 4951 (class 0 OID 0)
-- Dependencies: 235
-- Name: declaracao_presenca_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.declaracao_presenca_id_seq OWNED BY public.declaracao_presenca.id_declaracao;


--
-- TOC entry 228 (class 1259 OID 123092)
-- Name: historico_dentario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.historico_dentario (
    id_historicodent integer NOT NULL,
    paciente_id integer,
    tratamentos_passados text,
    bruxismo boolean,
    dores text,
    observacoes text,
    id integer
);


ALTER TABLE public.historico_dentario OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 123091)
-- Name: historico_dentario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.historico_dentario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.historico_dentario_id_seq OWNER TO postgres;

--
-- TOC entry 4952 (class 0 OID 0)
-- Dependencies: 227
-- Name: historico_dentario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.historico_dentario_id_seq OWNED BY public.historico_dentario.id_historicodent;


--
-- TOC entry 222 (class 1259 OID 123047)
-- Name: historico_medico; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.historico_medico (
    id_historico integer NOT NULL,
    medicamentos text,
    alergias text,
    gravidade text,
    internacoes text,
    id integer
);


ALTER TABLE public.historico_medico OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 123046)
-- Name: historico_medico_id_historico_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.historico_medico_id_historico_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.historico_medico_id_historico_seq OWNER TO postgres;

--
-- TOC entry 4953 (class 0 OID 0)
-- Dependencies: 221
-- Name: historico_medico_id_historico_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.historico_medico_id_historico_seq OWNED BY public.historico_medico.id_historico;


--
-- TOC entry 237 (class 1259 OID 139409)
-- Name: seq_medico; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_medico
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.seq_medico OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 123040)
-- Name: medico; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.medico (
    id_medico integer DEFAULT nextval('public.seq_medico'::regclass) NOT NULL,
    especialidade character varying(100),
    nome character varying(100)
);


ALTER TABLE public.medico OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 123039)
-- Name: medico_id_medico_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.medico_id_medico_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.medico_id_medico_seq OWNER TO postgres;

--
-- TOC entry 4954 (class 0 OID 0)
-- Dependencies: 219
-- Name: medico_id_medico_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.medico_id_medico_seq OWNED BY public.medico.id_medico;


--
-- TOC entry 226 (class 1259 OID 123078)
-- Name: notificacao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.notificacao (
    id integer NOT NULL,
    id_consulta integer,
    titulo character varying(200),
    mensagem text,
    data_de_envio timestamp without time zone
);


ALTER TABLE public.notificacao OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 123077)
-- Name: notificacao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.notificacao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.notificacao_id_seq OWNER TO postgres;

--
-- TOC entry 4955 (class 0 OID 0)
-- Dependencies: 225
-- Name: notificacao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.notificacao_id_seq OWNED BY public.notificacao.id;


--
-- TOC entry 230 (class 1259 OID 123106)
-- Name: plano_tratamento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plano_tratamento (
    id_tratamento integer NOT NULL,
    data_inicio date,
    data_fim date,
    descricao text,
    status character varying(50),
    id integer
);


ALTER TABLE public.plano_tratamento OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 123105)
-- Name: plano_tratamento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.plano_tratamento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.plano_tratamento_id_seq OWNER TO postgres;

--
-- TOC entry 4956 (class 0 OID 0)
-- Dependencies: 229
-- Name: plano_tratamento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.plano_tratamento_id_seq OWNED BY public.plano_tratamento.id_tratamento;


--
-- TOC entry 238 (class 1259 OID 139414)
-- Name: seq_tratamento; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_tratamento
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.seq_tratamento OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 123151)
-- Name: utilizador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.utilizador (
    id integer NOT NULL,
    nome character varying(100),
    email character varying(100),
    telefone character varying(20),
    tipo character varying(50),
    ativo boolean,
    data_inscricao date,
    senha character varying(255),
    sexo character varying(10),
    endereco text,
    nif character varying(20),
    data_nascimento date,
    numero_utente character varying(30)
);


ALTER TABLE public.utilizador OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 123150)
-- Name: utilizador_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.utilizador_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.utilizador_id_seq OWNER TO postgres;

--
-- TOC entry 4957 (class 0 OID 0)
-- Dependencies: 233
-- Name: utilizador_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.utilizador_id_seq OWNED BY public.utilizador.id;


--
-- TOC entry 4750 (class 2604 OID 123142)
-- Name: consentimento id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.consentimento ALTER COLUMN id SET DEFAULT nextval('public.consentimento_id_seq'::regclass);


--
-- TOC entry 4746 (class 2604 OID 123064)
-- Name: consulta id_consulta; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.consulta ALTER COLUMN id_consulta SET DEFAULT nextval('public.consulta_id_consulta_seq'::regclass);


--
-- TOC entry 4752 (class 2604 OID 123161)
-- Name: declaracao_presenca id_declaracao; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.declaracao_presenca ALTER COLUMN id_declaracao SET DEFAULT nextval('public.declaracao_presenca_id_seq'::regclass);


--
-- TOC entry 4748 (class 2604 OID 123095)
-- Name: historico_dentario id_historicodent; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_dentario ALTER COLUMN id_historicodent SET DEFAULT nextval('public.historico_dentario_id_seq'::regclass);


--
-- TOC entry 4745 (class 2604 OID 123050)
-- Name: historico_medico id_historico; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_medico ALTER COLUMN id_historico SET DEFAULT nextval('public.historico_medico_id_historico_seq'::regclass);


--
-- TOC entry 4747 (class 2604 OID 123081)
-- Name: notificacao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notificacao ALTER COLUMN id SET DEFAULT nextval('public.notificacao_id_seq'::regclass);


--
-- TOC entry 4749 (class 2604 OID 123109)
-- Name: plano_tratamento id_tratamento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plano_tratamento ALTER COLUMN id_tratamento SET DEFAULT nextval('public.plano_tratamento_id_seq'::regclass);


--
-- TOC entry 4751 (class 2604 OID 131243)
-- Name: utilizador id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador ALTER COLUMN id SET DEFAULT nextval('public.utilizador_id_seq'::regclass);


--
-- TOC entry 4937 (class 0 OID 123139)
-- Dependencies: 232
-- Data for Name: consentimento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.consentimento (id, paciente_id, tipo, data_consentimento, valido_ate, revogado) FROM stdin;
\.


--
-- TOC entry 4929 (class 0 OID 123061)
-- Dependencies: 224
-- Data for Name: consulta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.consulta (id_consulta, id_medico, duracao, tipo_de_marcacao, status, data_consulta, id, hora) FROM stdin;
17	1	\N	\N	pendente	2026-10-15	\N	10:30:00
18	1	\N	Implantologia	pendente	2026-10-15	\N	10:30:00
19	1	\N	Implantologia	pendente	2026-10-15	\N	10:30:00
20	1	\N	Implantologia	pendente	2026-10-15	\N	10:30:00
21	1	\N	Implantologia	pendente	2026-10-15	\N	10:30:00
22	1	\N	Implantologia	pendente	2026-10-15	\N	10:30:00
23	1	\N	Implantologia	pendente	2026-10-15	\N	10:30:00
\.


--
-- TOC entry 4941 (class 0 OID 123158)
-- Dependencies: 236
-- Data for Name: declaracao_presenca; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.declaracao_presenca (id_declaracao, consulta_id, data_emissao, observacoes) FROM stdin;
\.


--
-- TOC entry 4933 (class 0 OID 123092)
-- Dependencies: 228
-- Data for Name: historico_dentario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.historico_dentario (id_historicodent, paciente_id, tratamentos_passados, bruxismo, dores, observacoes, id) FROM stdin;
\.


--
-- TOC entry 4927 (class 0 OID 123047)
-- Dependencies: 222
-- Data for Name: historico_medico; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.historico_medico (id_historico, medicamentos, alergias, gravidade, internacoes, id) FROM stdin;
\.


--
-- TOC entry 4925 (class 0 OID 123040)
-- Dependencies: 220
-- Data for Name: medico; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.medico (id_medico, especialidade, nome) FROM stdin;
1	Implantologia	Dr. Diogo Calçada
2	Diretora Cliníca	Dra. Sílvia Coimbra
3	Medicina Dentária Generalista	Dra. Melissa Sousa Pinto
\.


--
-- TOC entry 4931 (class 0 OID 123078)
-- Dependencies: 226
-- Data for Name: notificacao; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.notificacao (id, id_consulta, titulo, mensagem, data_de_envio) FROM stdin;
\.


--
-- TOC entry 4935 (class 0 OID 123106)
-- Dependencies: 230
-- Data for Name: plano_tratamento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.plano_tratamento (id_tratamento, data_inicio, data_fim, descricao, status, id) FROM stdin;
1	2025-12-01	2025-12-10	Descrição do tratamento	ativo	\N
\.


--
-- TOC entry 4939 (class 0 OID 123151)
-- Dependencies: 234
-- Data for Name: utilizador; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.utilizador (id, nome, email, telefone, tipo, ativo, data_inscricao, senha, sexo, endereco, nif, data_nascimento, numero_utente) FROM stdin;
1	João Silva	joao@example.com	912345678	admin	t	2025-12-06	123	\N	\N	\N	\N	\N
2	Ana	ana@gmail.com	939449845	utilizador	t	2025-12-07	1234	\N	\N	\N	\N	\N
\.


--
-- TOC entry 4958 (class 0 OID 0)
-- Dependencies: 231
-- Name: consentimento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.consentimento_id_seq', 1, false);


--
-- TOC entry 4959 (class 0 OID 0)
-- Dependencies: 223
-- Name: consulta_id_consulta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.consulta_id_consulta_seq', 23, true);


--
-- TOC entry 4960 (class 0 OID 0)
-- Dependencies: 235
-- Name: declaracao_presenca_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.declaracao_presenca_id_seq', 1, false);


--
-- TOC entry 4961 (class 0 OID 0)
-- Dependencies: 227
-- Name: historico_dentario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.historico_dentario_id_seq', 1, false);


--
-- TOC entry 4962 (class 0 OID 0)
-- Dependencies: 221
-- Name: historico_medico_id_historico_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.historico_medico_id_historico_seq', 1, false);


--
-- TOC entry 4963 (class 0 OID 0)
-- Dependencies: 219
-- Name: medico_id_medico_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.medico_id_medico_seq', 1, false);


--
-- TOC entry 4964 (class 0 OID 0)
-- Dependencies: 225
-- Name: notificacao_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.notificacao_id_seq', 1, false);


--
-- TOC entry 4965 (class 0 OID 0)
-- Dependencies: 229
-- Name: plano_tratamento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.plano_tratamento_id_seq', 1, false);


--
-- TOC entry 4966 (class 0 OID 0)
-- Dependencies: 237
-- Name: seq_medico; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_medico', 3, true);


--
-- TOC entry 4967 (class 0 OID 0)
-- Dependencies: 238
-- Name: seq_tratamento; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_tratamento', 1, true);


--
-- TOC entry 4968 (class 0 OID 0)
-- Dependencies: 233
-- Name: utilizador_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.utilizador_id_seq', 1, true);


--
-- TOC entry 4766 (class 2606 OID 123144)
-- Name: consentimento consentimento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.consentimento
    ADD CONSTRAINT consentimento_pkey PRIMARY KEY (id);


--
-- TOC entry 4758 (class 2606 OID 123066)
-- Name: consulta consulta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.consulta
    ADD CONSTRAINT consulta_pkey PRIMARY KEY (id_consulta);


--
-- TOC entry 4770 (class 2606 OID 123165)
-- Name: declaracao_presenca declaracao_presenca_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.declaracao_presenca
    ADD CONSTRAINT declaracao_presenca_pkey PRIMARY KEY (id_declaracao);


--
-- TOC entry 4762 (class 2606 OID 123099)
-- Name: historico_dentario historico_dentario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_dentario
    ADD CONSTRAINT historico_dentario_pkey PRIMARY KEY (id_historicodent);


--
-- TOC entry 4756 (class 2606 OID 123054)
-- Name: historico_medico historico_medico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_medico
    ADD CONSTRAINT historico_medico_pkey PRIMARY KEY (id_historico);


--
-- TOC entry 4754 (class 2606 OID 123045)
-- Name: medico medico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medico
    ADD CONSTRAINT medico_pkey PRIMARY KEY (id_medico);


--
-- TOC entry 4760 (class 2606 OID 123085)
-- Name: notificacao notificacao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notificacao
    ADD CONSTRAINT notificacao_pkey PRIMARY KEY (id);


--
-- TOC entry 4764 (class 2606 OID 123113)
-- Name: plano_tratamento plano_tratamento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plano_tratamento
    ADD CONSTRAINT plano_tratamento_pkey PRIMARY KEY (id_tratamento);


--
-- TOC entry 4768 (class 2606 OID 123156)
-- Name: utilizador utilizador_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilizador
    ADD CONSTRAINT utilizador_pkey PRIMARY KEY (id);


--
-- TOC entry 4778 (class 2620 OID 139413)
-- Name: utilizador trg_sync_ids_utilizador; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER trg_sync_ids_utilizador BEFORE UPDATE ON public.utilizador FOR EACH ROW EXECUTE FUNCTION public.sincroniza_ids_utilizador();


--
-- TOC entry 4772 (class 2606 OID 139404)
-- Name: consulta consulta_id_medico_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.consulta
    ADD CONSTRAINT consulta_id_medico_fkey FOREIGN KEY (id_medico) REFERENCES public.medico(id_medico) ON DELETE CASCADE;


--
-- TOC entry 4777 (class 2606 OID 123166)
-- Name: declaracao_presenca declaracao_presenca_consulta_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.declaracao_presenca
    ADD CONSTRAINT declaracao_presenca_consulta_id_fkey FOREIGN KEY (consulta_id) REFERENCES public.consulta(id_consulta);


--
-- TOC entry 4773 (class 2606 OID 131218)
-- Name: consulta fk_consulta_utilizador; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.consulta
    ADD CONSTRAINT fk_consulta_utilizador FOREIGN KEY (id) REFERENCES public.utilizador(id);


--
-- TOC entry 4775 (class 2606 OID 131228)
-- Name: historico_dentario fk_historico_dentario_utilizador; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_dentario
    ADD CONSTRAINT fk_historico_dentario_utilizador FOREIGN KEY (id) REFERENCES public.utilizador(id);


--
-- TOC entry 4771 (class 2606 OID 131238)
-- Name: historico_medico fk_historico_medico_utilizador; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico_medico
    ADD CONSTRAINT fk_historico_medico_utilizador FOREIGN KEY (id) REFERENCES public.utilizador(id);


--
-- TOC entry 4776 (class 2606 OID 131233)
-- Name: plano_tratamento fk_plano_tratamento_utilizador; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plano_tratamento
    ADD CONSTRAINT fk_plano_tratamento_utilizador FOREIGN KEY (id) REFERENCES public.utilizador(id);


--
-- TOC entry 4774 (class 2606 OID 123086)
-- Name: notificacao notificacao_id_consulta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notificacao
    ADD CONSTRAINT notificacao_id_consulta_fkey FOREIGN KEY (id_consulta) REFERENCES public.consulta(id_consulta);


-- Completed on 2025-12-10 14:45:40

--
-- PostgreSQL database dump complete
--

