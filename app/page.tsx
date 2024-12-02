import dynamic from 'next/dynamic';

const TodoApp = dynamic(() => import('@/app/App'), {
  ssr: false,
});

export default TodoApp;
