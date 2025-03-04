I was fed up with setting up new react projects from scratch, so i built this boilerplate with all the most important dependencies installed and initialized ready to work.

The main branch is setup with React18 + Tailwind3. I have plans to add support for React19 + Tailwind4 in other branches but that will be only done when most of the packages start supporting it.

Here's a list of dependencies installed in this boilerplate:

- Tailwind 3
- React Hook Form
- Axios
- Tanstack React Query
- Tanstack React Table
- Lucide React
- React Cookie
- Framer Motion
- React Dropzone
- Zod
- Vaul
- Recharts
- Sonner
- Next Themes
- Radix UI + Shadcn UI (complete library)
- CVA
- Embla Carousel React
- React Router Dom

The folder structure is simple. All the common elements goes in the src/components folder.
All features specific folders goes inside the pages/{feature_name} folder.

```
src
├── components
│   ├── common
│   ├── pages
│   └── ui
├── context
├── hooks
├── lib
└── pages
    └── home
        ├── home.tsx
        ├── components
        ├── services
        └── hooks
```

To automate this even further, add this to your .zshrc

```
alias newreact='function _newreact() { cd ~/Desktop/Projects && git clone https://github.com/whygauravvv/react-starter "$1" && cd "$1" && rm -rf .git && git init && code .; }; _newreact'
```

and to run it just use

```
newreact {project name}
```
