export type Listener<X> = (x: X) => void;

export type Pub<X> = {
  (listener: Listener<X>): () => void;
  once(listener: Listener<X>): () => void;
  publish(x: X): void;
  clear(): void;
};

/** @deprecated use `pubsub` instead */
export function pub<X>(): Pub<X> {
  const listeners = new Set<Listener<X>>();

  function subscribe(listener: Listener<X>) {
    listeners.add(listener);
    return () => void listeners.delete(listener);
  }

  subscribe.publish = (x: X) => {
    for (const listener of listeners) listener(x);
  };

  subscribe.clear = () => listeners.clear();

  subscribe.once = (listener: Listener<X>) => {
    const actual_listener = (x: X) => {
      listener(x);
      listeners.delete(actual_listener);
    };
    listeners.add(actual_listener);
    return () => void listeners.delete(actual_listener);
  };

  return subscribe;
}
