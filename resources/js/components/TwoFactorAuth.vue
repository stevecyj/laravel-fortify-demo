<template>
    <div>
        <h2>Two Factor Authentication</h2>

        <confirm-password>
            <button>Enable</button>
        </confirm-password>
    </div>
</template>

<script>
import ConfirmPassword from "./ConfirmPassword";

export default {
    components: {
        ConfirmPassword,
    },
};
</script>
